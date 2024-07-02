document.addEventListener('DOMContentLoaded', function() {
    const admin_list = document.querySelectorAll('.admin-list .avatar');
    const adm_totalElements = admin_list.length;
    admin_list.forEach((adm, index) => {
        adm.style.animationDelay = `${(adm_totalElements - index - 1) * 0.025}s`;
    });

    const social_list = document.querySelectorAll('header.icons-header *');
    social_list.forEach((social, index) => {
        social.style.animationDelay = `${index * 0.1}s`;
    });

    const qa_list = document.querySelectorAll('.question, .answer');
    qa_list.forEach((elem, index) => {
        elem.style.animationDelay = `${index * 0.1}s`;
    });

    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.1}s`;
    });
});
