export const startPayment = async (course, navigate) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/payment/create-order",
      {
        amount: course.price,
        courseId: course.id,
      }
    );

    const options = {
      key: "YOUR_KEY_ID",
      amount: data.amount,
      currency: "INR",
      name: "Your Academy",
      description: course.title,
      order_id: data.id,

      handler: async function (response) {
        await axios.post(
          "http://localhost:5000/api/payment/verify",
          {
            ...response,
            courseId: course.id,
          },
          {
            headers: {
              userId: "demoUser123",
            },
          }
        );

        // React Navigation (CORRECT WAY)
        navigate("/my-courses");
      },

      theme: { color: "#6366f1" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  } catch (err) {
    console.log(err);
  }
};