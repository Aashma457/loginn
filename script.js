<script>
    document.getElementById("panForm").addEventListener("submit", function(event) {
      event.preventDefault();
      var panNumber = document.getElementById("panNumber").value;
      var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;

      if (regex.test(panNumber)) {
        document.getElementById("error").textContent = "";
        alert("PAN Card number is valid!");
        // You can perform further actions or submit the form here
      } else {
        document.getElementById("error").textContent = "Invalid PAN Card number.";
      }
    });
  </script>