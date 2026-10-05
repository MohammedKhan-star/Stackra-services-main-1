export const projectEnquiries = {
  "school-website-development": {
    title: "School Website Project Enquiry",
    description: "Tell us about your school website requirements.",
    fields: [
      {
        name: "schoolName",
        label: "School Name",
        type: "text",
        required: true,
      },
      {
        name: "schoolType",
        label: "School Type",
        type: "select",
        options: [
          "School",
          "College",
          "Academy",
          "Educational Institution",
        ],
      },
      {
        name: "onlineAdmission",
        label: "Do you need Online Admission?",
        type: "yesno",
      },
      {
        name: "studentPortal",
        label: "Do you need Student / Parent Login?",
        type: "yesno",
      },
      {
        name: "gallery",
        label: "Do you need Gallery?",
        type: "yesno",
      },
      {
        name: "noticeBoard",
        label: "Do you need Notice & Events?",
        type: "yesno",
      },
      {
        name: "additionalRequirements",
        label: "Additional Requirements",
        type: "textarea",
      },
    ],
  },

  "clinic-website-development": {
    title: "Clinic Website Project Enquiry",
    description: "Tell us about your clinic website requirements.",
    fields: [
      {
        name: "clinicName",
        label: "Clinic / Hospital Name",
        type: "text",
        required: true,
      },
      {
        name: "doctorCount",
        label: "Number of Doctors",
        type: "number",
      },
      {
        name: "appointmentSystem",
        label: "Online Appointment System",
        type: "yesno",
      },
      {
        name: "doctorProfiles",
        label: "Doctor Profiles",
        type: "yesno",
      },
      {
        name: "whatsapp",
        label: "WhatsApp Integration",
        type: "yesno",
      },
      {
        name: "additionalRequirements",
        label: "Additional Requirements",
        type: "textarea",
      },
    ],
  },

  "restaurant-website-development": {
    title: "Restaurant Website Project Enquiry",
    description: "Tell us about your restaurant website requirements.",
    fields: [
      {
        name: "restaurantName",
        label: "Restaurant Name",
        type: "text",
        required: true,
      },
      {
        name: "menu",
        label: "Digital Menu",
        type: "yesno",
      },
      {
        name: "onlineOrdering",
        label: "Online Food Ordering",
        type: "yesno",
      },
      {
        name: "tableBooking",
        label: "Table Booking",
        type: "yesno",
      },
      {
        name: "delivery",
        label: "Home Delivery",
        type: "yesno",
      },
      {
        name: "additionalRequirements",
        label: "Additional Requirements",
        type: "textarea",
      },
    ],
  },

  "ecommerce-website-development": {
    title: "E-Commerce Project Enquiry",
    description: "Tell us about your online store requirements.",
    fields: [
      {
        name: "businessName",
        label: "Business Name",
        type: "text",
        required: true,
      },
      {
        name: "productCount",
        label: "Approximate Number of Products",
        type: "number",
      },
      {
        name: "paymentGateway",
        label: "Payment Gateway",
        type: "yesno",
      },
      {
        name: "customerLogin",
        label: "Customer Login",
        type: "yesno",
      },
      {
        name: "orderTracking",
        label: "Order Tracking",
        type: "yesno",
      },
      {
        name: "adminPanel",
        label: "Admin Panel",
        type: "yesno",
      },
      {
        name: "additionalRequirements",
        label: "Additional Requirements",
        type: "textarea",
      },
    ],
  },

  "custom-software-development": {
    title: "Custom Software Project Enquiry",
    description: "Tell us about your software requirements.",
    fields: [
      {
        name: "businessName",
        label: "Business / Organization Name",
        type: "text",
        required: true,
      },
      {
        name: "users",
        label: "Approximate Number of Users",
        type: "number",
      },
      {
        name: "modules",
        label: "Required Modules",
        type: "textarea",
      },
      {
        name: "adminPanel",
        label: "Admin Panel Required",
        type: "yesno",
      },
      {
        name: "mobileApp",
        label: "Mobile App Required",
        type: "yesno",
      },
      {
        name: "thirdPartyIntegration",
        label: "Third-Party Integration Required",
        type: "yesno",
      },
      {
        name: "additionalRequirements",
        label: "Additional Requirements",
        type: "textarea",
      },
    ],
  },
};