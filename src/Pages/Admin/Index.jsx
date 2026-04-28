import { useEffect, useState } from "react";
import { myAxios } from "../../config/AxiosClient";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = `${myAxios.defaults.baseURL}/courses`;

export default function App() {
  const [courses, setCourses] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  /* ---------------- PAGINATION STATE ---------------- */
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Change this number to show more/less rows

  const emptyForm = {
    title: "", slug: "", tutor: "", category: "", price: "", oldPrice: "",
    description: "", duration: "", language: "", lectures: "", validity: "",
    level: "", isPopular: false, features: "", Include: "",
    includes: { videos: false, notes: false, testSeries: false, downloadable: false },
  };

  const [form, setForm] = useState(emptyForm);

  /* ---------------- API ACTIONS ---------------- */
  const loadCourses = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Load error:", err);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const addCourse = async () => {
    try {
      const payload = {
        ...form,
        price: Number(form.price) || 0,
        oldPrice: Number(form.oldPrice) || 0,
        lectures: Number(form.lectures) || 0,
        features: form.features ? form.features.split(",").map(i => i.trim()).filter(Boolean) : [],
        Include: form.Include ? form.Include.split(",").map(i => i.trim()).filter(Boolean) : [],
      };

      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setForm(emptyForm);
      setIsAddFormOpen(false);
      loadCourses();
    } catch (err) {
      console.error("Create error:", err);
    }
  };

  const updateCourse = async () => {
    try {
      const payload = {
        ...editingCourse,
        price: Number(editingCourse.price) || 0,
        oldPrice: Number(editingCourse.oldPrice) || 0,
        lectures: Number(editingCourse.lectures) || 0,
        features: typeof editingCourse.features === "string" 
          ? editingCourse.features.split(",").map(i => i.trim()).filter(Boolean) 
          : editingCourse.features,
        Include: typeof editingCourse.Include === "string" 
          ? editingCourse.Include.split(",").map(i => i.trim()).filter(Boolean) 
          : editingCourse.Include,
      };

      await fetch(`${API}/${editingCourse._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setEditingCourse(null);
      loadCourses();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const deleteCourse = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      loadCourses();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  /* ---------------- PAGINATION LOGIC ---------------- */
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* ---------------- FORM HANDLERS ---------------- */
  const handleInputChange = (e, stateSetter) => {
    const { name, value, type, checked } = e.target;
    stateSetter((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNestedCheckbox = (e, stateSetter) => {
    const { name, checked } = e.target;
    stateSetter((prev) => ({
      ...prev,
      includes: { ...prev.includes, [name]: checked },
    }));
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Management Dashboard</h1>
          <button
            onClick={() => setIsAddFormOpen(!isAddFormOpen)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl shadow-lg transition-all font-semibold"
          >
            {isAddFormOpen ? "Close Form" : "+ Add New Course"}
          </button>
        </div>

        {/* ADD COURSE FORM (Omitted for brevity, keep your previous form code here) */}
        {isAddFormOpen && (
             <div className="bg-white p-8 rounded-2xl shadow-xl mb-10 border border-slate-100 animate-in fade-in zoom-in duration-300">
             <h2 className="text-xl font-bold mb-6 text-slate-700">Course Information</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {["title", "slug", "tutor", "category", "price", "oldPrice", "duration", "language", "lectures", "validity", "level"].map((f) => (
                 <div key={f} className="flex flex-col">
                   <label className="text-xs font-bold text-slate-400 uppercase mb-1 ml-1">{f}</label>
                   <input
                     name={f}
                     value={form[f]}
                     onChange={(e) => handleInputChange(e, setForm)}
                     placeholder={f}
                     className="border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                   />
                 </div>
               ))}
               <input
                 name="features"
                 value={form.features}
                 onChange={(e) => handleInputChange(e, setForm)}
                 placeholder="Features (comma separated)"
                 className="border border-slate-200 p-3 rounded-lg md:col-span-3 outline-none focus:ring-2 focus:ring-indigo-500"
               />
               <textarea
                 name="description"
                 value={form.description}
                 onChange={(e) => handleInputChange(e, setForm)}
                 placeholder="Description"
                 className="border border-slate-200 p-3 rounded-lg md:col-span-3 h-24 outline-none focus:ring-2 focus:ring-indigo-500"
               />
               
               <div className="md:col-span-3 flex flex-wrap gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                 {["videos", "notes", "testSeries", "downloadable"].map((key) => (
                   <label key={key} className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium">
                     <input
                       type="checkbox"
                       checked={form.includes[key]}
                       onChange={(e) => handleNestedCheckbox(e, setForm)}
                       name={key}
                       className="w-4 h-4 accent-indigo-600"
                     /> {key}
                   </label>
                 ))}
                 <label className="flex items-center gap-2 cursor-pointer text-indigo-600 font-bold ml-auto">
                   <input
                     type="checkbox"
                     name="isPopular"
                     checked={form.isPopular}
                     onChange={(e) => handleInputChange(e, setForm)}
                     className="w-4 h-4 accent-indigo-600"
                   /> Mark as Popular
                 </label>
               </div>
 
               <button
                 onClick={addCourse}
                 className="md:col-span-3 bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-bold text-lg shadow-md transition-all mt-4"
               >
                 Publish Course
               </button>
             </div>
           </div>
        )}

        {/* LIST VIEW WITH PAGINATION */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-bold border-b border-slate-200">
                <th className="p-5">Course Title</th>
                <th className="p-5">Category</th>
                <th className="p-5">Price</th>
                <th className="p-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCourses.map((c) => (
                <tr key={c._id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                  <td className="p-5 font-semibold text-slate-700">{c.title}</td>
                  <td className="p-5 text-slate-500"><span className="bg-slate-200 px-2 py-1 rounded text-[10px]">{c.category}</span></td>
                  <td className="p-5 font-bold text-indigo-600">₹{c.price}</td>
                  <td className="p-5 text-right space-x-3">
                    <button
                      onClick={() => setEditingCourse({
                        ...c,
                        features: Array.isArray(c.features) ? c.features.join(", ") : c.features,
                        Include: Array.isArray(c.Include) ? c.Include.join(", ") : c.Include,
                      })}
                      className="text-indigo-600 hover:text-indigo-900 font-bold text-sm"
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteCourse(c._id)} className="text-red-400 hover:text-red-600 font-bold text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION CONTROLS */}
          <div className="flex items-center justify-between p-5 bg-white border-t border-slate-100">
            <p className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-700">{indexOfFirstItem + 1}</span> to <span className="font-bold text-slate-700">{Math.min(indexOfLastItem, courses.length)}</span> of <span className="font-bold text-slate-700">{courses.length}</span> results
            </p>
            <div className="flex gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
                className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                  currentPage === 1 ? "text-slate-300 border-slate-100" : "text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                Previous
              </button>
              
              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                    currentPage === index + 1 ? "bg-indigo-600 text-white shadow-md shadow-indigo-100" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
                className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                  currentPage === totalPages ? "text-slate-300 border-slate-100" : "text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* UPDATE MODAL (Keep your existing modal code here) */}
      {editingCourse && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
              <h2 className="text-2xl font-black text-slate-800">Modify Course</h2>
              <button 
                onClick={() => setEditingCourse(null)} 
                className="text-slate-400 hover:text-slate-600 text-3xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {["title", "slug", "tutor", "category", "price", "oldPrice", "duration", "language", "lectures", "validity", "level"].map((field) => (
                  <div key={field}>
                    <label className="text-xs font-black uppercase text-slate-400 mb-1 block ml-1">{field}</label>
                    <input
                      name={field}
                      value={editingCourse[field] || ""}
                      onChange={(e) => handleInputChange(e, setEditingCourse)}
                      className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
                    />
                  </div>
                ))}
                
                <div className="md:col-span-2">
                  <label className="text-xs font-black uppercase text-slate-400 mb-1 block">Description</label>
                  <textarea
                    name="description"
                    value={editingCourse.description || ""}
                    onChange={(e) => handleInputChange(e, setEditingCourse)}
                    className="w-full border border-slate-200 p-3 rounded-xl h-32 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-black uppercase text-slate-400 mb-1 block">Features (comma separated)</label>
                  <input
                    name="features"
                    value={editingCourse.features || ""}
                    onChange={(e) => handleInputChange(e, setEditingCourse)}
                    className="w-full border border-slate-200 p-3 rounded-xl"
                  />
                </div>

                <div className="md:col-span-2 flex gap-4 bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
                  {["videos", "notes", "testSeries", "downloadable"].map((key) => (
                    <label key={key} className="flex items-center gap-2 text-sm font-bold text-indigo-700 capitalize">
                      <input
                        type="checkbox"
                        checked={editingCourse.includes?.[key] || false}
                        onChange={(e) => handleNestedCheckbox(e, setEditingCourse)}
                        name={key}
                        className="accent-indigo-600 w-4 h-4"
                      /> {key}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
              <button
                onClick={() => setEditingCourse(null)}
                className="flex-1 py-3 border border-slate-300 rounded-xl font-bold text-slate-600 hover:bg-white transition-all"
              >
                Cancel
              </button>
              <button
                onClick={updateCourse}
                className="flex-2 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
              >
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}