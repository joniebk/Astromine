<script>
function copyIP(){
  const input = document.getElementById("serverIP");
  input.select();
  input.setSelectionRange(0, 99999); // telefonlar uchun
  document.execCommand("copy");
  alert("IP kopy qilindi!");
}
</script>