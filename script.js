// Validasi formulir
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameModal = new bootstrap.Modal(document.getElementById("nameModal"));
const emailModal = new bootstrap.Modal(document.getElementById("emailModal"));
const messageModal = new bootstrap.Modal(document.getElementById("messageModal"));
const successModal = new bootstrap.Modal(document.getElementById("successModal")); // Tambahkan modal untuk notifikasi berhasil

document.getElementById("submitBtn").addEventListener("click", function () {
  if (contactForm.checkValidity()) {
    // Form valid, Anda bisa mengirim data ke server di sini
    successModal.show(); // Tampilkan notifikasi berhasil
  } else {
    if (nameInput.validity.valueMissing) {
      nameModal.show();
    }
    if (emailInput.validity.valueMissing) {
      emailModal.show();
    }
    if (messageInput.validity.valueMissing) {
      messageModal.show();
    }
    if (!nameInput.validity.valid) {
      nameModal.show();
    }
  }
});
