const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} 

window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		
	}
})


const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


	  
  $(document).ready(function() {
  $('#addTaskForm').submit(function(event) {
    event.preventDefault(); // prevent form from submitting

    // validate form inputs
    var taskName = $('#taskName').val();
    var projectList = $('#projectList').val();
    var isValid = true;

    if (taskName.trim() === '') {
      $('#taskName').addClass('is-invalid');
      isValid = false;
    } else {
      $('#taskName').removeClass('is-invalid');
    }

    if (projectList === '') {
      $('#projectList').addClass('is-invalid');
      isValid = false;
    } else {
      $('#projectList').removeClass('is-invalid');
    }

    if (isValid) {
      // disable form submit button
      $('#submitBtn').prop('disabled', true);

      // show loading spinner
      $('#loadingSpinner').show();

      // send form data to server using AJAX
      $.ajax({
        url: '/submit-task',
        method: 'POST',
        data: $('#addTaskForm').serialize(),
        success: function(response) {
          // handle server response
          console.log(response);

          // hide loading spinner
          $('#loadingSpinner').hide();

          // enable form submit button
          $('#submitBtn').prop('disabled', false);

          // close modal
          $('#addTaskModal').modal('hide');
        },
        error: function(xhr, status, error) {
          // handle error
          console.log(error);

          // hide loading spinner
          $('#loadingSpinner').hide();

          // enable form submit button
          $('#submitBtn').prop('disabled', false);
        }
      });
    }
  }); // closing parenthesis for submit function

  $('#assignTaskForm').submit(function(event) {
    event.preventDefault(); // prevent form from submitting

    // validate form inputs
    var taskList = $('#taskList').val();
    var teamList = $('#teamList').val();
    var freelancerList = $('#freelancerList').val();
    var isValid = true;

    if (taskList === '') {
      $('#taskList').addClass('is-invalid');
      isValid = false;
    } else {
      $('#taskList').removeClass('is-invalid');
    }

    if (teamList === '') {
      $('#teamList').addClass('is-invalid');
      isValid = false;
    } else {
      $('#teamList').removeClass('is-invalid');
    }

    if (freelancerList === '') {
      $('#freelancerList').addClass('is-invalid');
      isValid = false;
    } else {
      $('#freelancerList').removeClass('is-invalid');
    }

    // submit form if inputs are valid
    if (isValid) {
      // disable form submit button
      $('#submitBtn').prop('disabled', true);

      // show loading spinner
      $('#loadingSpinner').show();

      // send form data to server using AJAX
      $.ajax({
        url: '/assign-task',
        method: 'POST',
        data: $('#assignTaskForm').serialize(),
        success: function(response) {
          // handle server response
          console.log(response);

          // hide loading spinner
          $('#loadingSpinner').hide();

          // enable form submit button
          $('#submitBtn').prop('disabled', false);

          // close modal
          $('#assignTaskModal').modal('hide');
        },
        error: function(xhr, status, error) {
          // handle error
          console.log(error);

          // hide loading spinner
          $('#loadingSpinner').hide();

          // enable form submit button
          $('#submitBtn').prop('disabled', false);
        }
      });
    }
  });

  $('#tasksTable').DataTable({
    // enable pagination
    paging: true,
    // set default page length
    pageLength: 10,
    // enable searching
    searching: true,
    // set search input to be placed outside the table
    dom: '<"row"<"col-sm-6"l><"col-sm-6"f>>rtip',
    // customize search input
    language: {
      searchPlaceholder: "Search by name or data...",
      search: "",
    },
    // customize table layout
    columnDefs: [{
      targets: '_all',
      className: 'align-middle'
    }]
  });

  $('#freelanceTasksTable').DataTable({
     // enable pagination
     paging: true,
     // set default page length
     pageLength: 10,
     // enable searching
     searching: true,
     // set search input to be placed outside the table
     dom: '<"row"<"col-sm-6"l><"col-sm-6"f>>rtip',
     // customize search input
     language: {
       searchPlaceholder: "Search by name or data...",
       search: "",
     },
     // customize table layout
     columnDefs: [{
       targets: '_all',
       className: 'align-middle'
     }]
  });
  var sectionBtns = document.getElementsByClassName("sidenav-section-btn");

  for (var i = 0; i < sectionBtns.length; i++) {
    sectionBtns[i].addEventListener("click", function() {
      var items = this.nextElementSibling;
      if (items.style.display === "block") {
        items.style.display = "none";
      } else {
        items.style.display = "block";
      }
    });
  }
}); // closing parenthesis for document ready function
