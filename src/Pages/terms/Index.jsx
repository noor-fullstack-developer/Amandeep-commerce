import React from "react";

const Index = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to our platform. By accessing or using our website and services,
        you agree to be bound by the following terms and conditions. Please read
        them carefully.
      </p>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Use of Services</h2>
        <p className="text-gray-600">
          You agree to use our platform only for lawful purposes. You must not
          misuse our services or attempt to access them using unauthorized
          methods.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Course Access</h2>
        <p className="text-gray-600">
          Once a course is purchased, you are granted limited, non-transferable
          access for the specified validity period. Sharing login credentials is
          strictly prohibited.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Payments & Refunds</h2>
        <p className="text-gray-600">
          All payments are processed securely. Fees once paid are non-refundable
          unless otherwise stated. We reserve the right to modify pricing at any
          time.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Intellectual Property
        </h2>
        <p className="text-gray-600">
          All course content, including videos, notes, and materials, are the
          intellectual property of the platform and instructors. Unauthorized
          distribution is strictly prohibited.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. User Conduct</h2>
        <p className="text-gray-600">
          Users must behave respectfully and must not post harmful, abusive, or
          illegal content on the platform.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-600">
          We are not responsible for any direct or indirect damages arising from
          the use of our services.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
        <p className="text-gray-600">
          We may update these terms from time to time. Continued use of the
          platform implies acceptance of the updated terms.
        </p>
      </div>

      {/* Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions regarding these Terms & Conditions, please
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
