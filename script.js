document.getElementById('downloadBtn').addEventListener('click', function() {
    // Replace 'path_to_your_resume.pdf' with the path to your resume file
    var resumeUrl = 'Cv_louhab_abderazzak.pdf';
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Cv_louhab_abderazzak.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});