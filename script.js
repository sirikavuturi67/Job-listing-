// Example job listings data
const jobs = [
  { company: 'Tech Corp', role: 'Software Engineer', salary: 100000, wfh: false, location: 'New York' },
  { company: 'DataX', role: 'Data Scientist', salary: 120000, wfh: false, location: 'San Francisco' },
  { company: 'Webify', role: 'Web Developer', salary: 90000, wfh: true, location: 'Remote' },
  { company: 'AI Labs', role: 'AI Researcher', salary: 130000, wfh: false, location: 'Boston' },
  { company: 'Tech Corp', role: 'Data Analyst', salary: 85000, wfh: true, location: 'Chicago' }
];

// Populate the job listings
function displayJobs(jobsToDisplay) {
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = ''; // Clear existing jobs

  jobsToDisplay.forEach(job => {
    const jobItem = document.createElement('div');
    jobItem.className = 'job-item';
    jobItem.innerHTML = `
      <h3>${job.role} - ${job.company}</h3>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Salary:</strong> $${job.salary.toLocaleString()}</p>
      <p><strong>Remote:</strong> ${job.wfh ? 'Yes' : 'No'}</p>
    `;
    jobList.appendChild(jobItem);
  });
}

// Filter jobs based on user input
function applyFilters() {
  const filterCompany = document.getElementById('filterCompany').value.trim();
  const filterJobRole = document.getElementById('filterJobRole').value.trim();
  const filterSalary = parseInt(document.getElementById('filterSalary').value) || 0;
  const filterWFH = document.getElementById('filterWFH').checked;
  const filterLocation = document.getElementById('filterLocation').value.trim();

  const filteredJobs = jobs.filter(job => {
    return (
      (!filterCompany || job.company.toLowerCase().includes(filterCompany.toLowerCase())) &&
      (!filterJobRole || job.role.toLowerCase().includes(filterJobRole.toLowerCase())) &&
      (filterSalary === 0 || job.salary >= filterSalary) &&
      (!filterWFH || job.wfh) &&
      (!filterLocation || job.location.toLowerCase().includes(filterLocation.toLowerCase()))
    );
  });

  displayJobs(filteredJobs);
}

// Event listeners
document.getElementById('loginSignupBtn').addEventListener('click', function() {
  document.getElementById('loginSignupModal').style.display = 'flex';
});

document.getElementById('cancelBtn').addEventListener('click', function() {
  document.getElementById('loginSignupModal').style.display = 'none';
});

document.getElementById('submitBtn').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert(`Welcome, ${username}!`);
    document.getElementById('loginSignupModal').style.display = 'none';
  } else {
    alert('Please enter both username and password');
  }
});

// Toggle filters section
document.getElementById('filterBtn').addEventListener('click', function() {
  const filterSection = document.getElementById('filterSection');
  filterSection.style.display = filterSection.style.display === 'none' ? 'block' : 'none';
});

// Apply filters
document.getElementById('applyFiltersBtn').addEventListener('click', function() {
  applyFilters();
});

// Reset filters and display all jobs on Home button click
document.getElementById('homeBtn').addEventListener('click', function() {
  // Reset filter fields
  document.getElementById('filterCompany').value = '';
  document.getElementById('filterJobRole').value = '';
  document.getElementById('filterSalary').value = '';
  document.getElementById('filterWFH').checked = false;
  document.getElementById('filterLocation').value = '';

  // Hide filter section if it's visible
  const filterSection = document.getElementById('filterSection');
  if (filterSection.style.display === 'block') {
    filterSection.style.display = 'none';
  }

  // Display all jobs
  displayJobs(jobs);
});

// Initial display of all jobs
displayJobs(jobs);
