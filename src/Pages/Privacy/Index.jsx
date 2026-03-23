import React from "react";

const Index = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      <p className="text-gray-600 mb-6">
        This Privacy Policy describes how we collect, use, and protect your
        information when you use our platform. By accessing our services, you
        agree to the terms outlined below.
      </p>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-600">
          We may collect personal information such as your name, email address,
          phone number, and payment details when you register or purchase a
          course.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600">
          Your information is used to provide access to courses, improve our
          services, process payments, and communicate important updates.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Data Protection</h2>
        <p className="text-gray-600">
          We implement appropriate security measures to protect your personal
          data from unauthorized access, misuse, or disclosure.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
        <p className="text-gray-600">
          We may use cookies to enhance your browsing experience and analyze
          website traffic. You can disable cookies in your browser settings.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
        <p className="text-gray-600">
          We may use trusted third-party services for payment processing and
          analytics. These providers have their own privacy policies.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. User Rights</h2>
        <p className="text-gray-600">
          You have the right to access, update, or delete your personal
          information. You may contact us for any such requests.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to Policy</h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. Continued use of
          our platform means you accept the updated policy.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions regarding this Privacy Policy, please
          contact us through our website.
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-10 text-center">
        Last updated: March 2026
      </p>
    </div>
  );
};

export default Index;
