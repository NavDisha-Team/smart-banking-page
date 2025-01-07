function changeLanguage(language) {
    var elements = document.querySelectorAll('[data-key]');
    elements.forEach(function (element) {
        var key = element.getAttribute('data-key');
        if (language === 'hi') {
            element.textContent = translations.hindi[key] || key;
        } else {
            element.textContent = translations.english[key] || key;
        }
    });
}

const translations = {
    english: {
        header: "Simple Banking for Everyone",
        intro: "Easy options designed to support your financial growth.",
        keyFeatures: "Key Features",
        feature1: "Savings Accounts",
        feature2: "Loans",
        feature3: "Microfinance",
        feature4: "Investments",
        comparePlans: "Compare Plans",
        plan: "Plan",
        fees: "Fees",
        interestRates: "Interest Rates",
        perks: "Perks",
        customerTestimonials: "What Our Customers Say",
        aiTool: "AI-Powered Budgeting Tool",
        aiDescription: "Smart financial management made easy. Let AI analyze your expenses and create a personalized budget for you.",
        tryTool: "Try Budgeting Tool",
        learnMore: "Learn More",
        openAccount: "Open an Account",
        speakToUs: "Speak to Us",
        needHelp: "Need help? Visit our FAQ or Contact Us."
    },
    hindi: {
        header: "सभी के लिए सरल बैंकिंग",
        intro: "आपकी वित्तीय वृद्धि का समर्थन करने के लिए डिज़ाइन किए गए आसान विकल्प।",
        keyFeatures: "मुख्य विशेषताएँ",
        feature1: "बचत खाता",
        feature2: "लोन",
        feature3: "सूक्ष्म वित्त",
        feature4: "निवेश",
        comparePlans: "योजना तुलना",
        plan: "योजना",
        fees: "शुल्क",
        interestRates: "ब्याज दरें",
        perks: "फायदे",
        customerTestimonials: "हमारे ग्राहकों का कहना है",
        aiTool: "ए.आई. आधारित बजटिंग टूल",
        aiDescription: "स्मार्ट वित्तीय प्रबंधन को सरल बनाएं। ए.आई. आपके खर्चों का विश्लेषण करें और आपके लिए एक व्यक्तिगत बजट तैयार करें।",
        tryTool: "बजटिंग टूल आज़माएँ",
        learnMore: "अधिक जानें",
        openAccount: "खाता खोलें",
        speakToUs: "हमसे बात करें",
        needHelp: "मदद चाहिए? हमारी FAQ देखें या संपर्क करें।"
    }
};
