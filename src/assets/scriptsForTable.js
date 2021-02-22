// var $ : any
$(function () {
  $("#example1").DataTable({
     "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "csv", "pdf", "print", "colvis"]
  }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
});
