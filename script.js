document.addEventListener('DOMContentLoaded', function() {
    const toggleFAQ = document.querySelector('.toggle-faq');
    const faqSection = document.getElementById('faq-section');
    const chatSection = document.querySelector('.chat-section');

    // Function to toggle FAQ section
    function toggleFAQSection() {
        const isOpen = faqSection.style.width !== '0px' && faqSection.style.width !== '';

        if (isOpen) {
            faqSection.style.width = '0';
            chatSection.style.width = '95%';
            faqSection.style.height= '5%';
        } else {
            faqSection.style.width = '30%'; // Expand FAQ section
            chatSection.style.width = '70%'; // Adjust chat section width accordingly
            faqSection.style.height= '100%';
        }
    }

    // Initially collapse FAQ section
    faqSection.style.width = '0';
    chatSection.style.width = '95%';
    faqSection.style.height= '5%';

    // Event listener for the toggle button
    toggleFAQ.addEventListener('click', toggleFAQSection);
});

On Fri, Apr 5, 2024 at 3:35 PM Manas Rath <manasrath@gmail.com> wrote:
pfa

/*
document.addEventListener('DOMContentLoaded', function() {
    const toggleFAQ = document.querySelector('.toggle-faq');
    const faqSection = document.getElementById('faq-section');
    const chatSection = document.querySelector('.chat-section');

    toggleFAQ.addEventListener('click', function() {
        const isOpen = faqSection.style.width !== '0px';
       
        if (isOpen) {
            faqSection.style.width = '0';
            faqSection.style.height= '10%';
            chatSection.style.width = '100%';
        } else {
            faqSection.style.width = '10%'; // Or your preferred width
            chatSection.style.width = '70%'; // Adjust accordingly
            faqSection.style.height= '100%';
        }
    });
});

*/

document.addEventListener('DOMContentLoaded', function() {
    const toggleFAQ = document.querySelector('.toggle-faq');
    const faqSection = document.getElementById('faq-section');
    const chatSection = document.querySelector('.chat-section');

    // Function to toggle FAQ section
    function toggleFAQSection() {
        const isOpen = faqSection.style.width !== '0px' && faqSection.style.width !== '';

        if (isOpen) {
            faqSection.style.width = '0';
            chatSection.style.width = '95%';
            faqSection.style.height= '5%';
        } else {
            faqSection.style.width = '30%'; // Expand FAQ section
            chatSection.style.width = '70%'; // Adjust chat section width accordingly
            faqSection.style.height= '100%';
        }
    }

    // Initially collapse FAQ section
    faqSection.style.width = '0';
    chatSection.style.width = '95%';
    faqSection.style.height= '5%';

    // Event listener for the toggle button
    toggleFAQ.addEventListener('click', toggleFAQSection);
});
