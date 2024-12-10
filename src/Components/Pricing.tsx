"use client"
import React, { useState } from "react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => setIsYearly(!isYearly);

  const plans = [
    {
      title: "FREE",
      price: "0",
      features: [
        "Unlimited product updates",
        "Unlimited product uploads",
        "Basic Cloud storage",
      ],
      disabledFeatures: ["Priority support", "Email and community support"],
      buttonText: "Try for free",
    },
    {
      title: "STANDARD",
      price: isYearly ? "99.99" : "9.99",
      features: [
        "Unlimited product updates",
        "Unlimited product uploads",
        "5GB Cloud storage",
        "Priority support",
      ],
      disabledFeatures: ["Email and community support"],
      buttonText: "Try for free",
      highlighted: true,
    },
    {
      title: "PREMIUM",
      price: isYearly ? "199.99" : "19.99",
      features: [
        "Unlimited product updates",
        "Unlimited product uploads",
        "10GB Cloud storage",
        "Priority support",
        "Email and community support",
      ],
      disabledFeatures: [],
      buttonText: "Try for free",
    },
  ];

  return (
    <div className="bg-slate-200 py-16 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col justify-center items-center">
            <p>PRICING</p>
            <h1 className="text-4xl font-bold">Simple Pricing</h1>


        </div>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between the key majorities of Classical Physics and Quantum Mechanics
        </p>
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={toggleBilling}
            className={`px-4 py-2 border ${
              isYearly ? "bg-blue-900 text-white" : "bg-gray-100"
            } rounded-l-lg`}
          >
            Yearly
          </button>
          <button
            onClick={toggleBilling}
            className={`px-4 py-2 border ${
              !isYearly ? "bg-blue-900 text-white" : "bg-gray-100"
            } rounded-r-lg`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 flex flex-col ${
              plan.highlighted ? "bg-blue-900 text-white" : "bg-gray-50"
            }`}
          >
            <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
            <p className="text-4xl font-bold mb-4">
              ${plan.price} <span className="text-sm font-normal">/ Month</span>
            </p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span>{feature}</span>
                </li>
              ))}
              {plan.disabledFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-400">
                  <span className="w-4 h-4 bg-gray-300 rounded-full mr-2"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`py-2 px-4 font-semibold rounded-md ${
                plan.highlighted
                  ? "bg-white text-blue-900"
                  : "bg-blue-900 text-white"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
