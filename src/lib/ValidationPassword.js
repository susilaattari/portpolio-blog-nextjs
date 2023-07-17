
export default function IsValidPassword(password) {
    // Lakukan validasi sesuai dengan persyaratan kustom
    // Misalnya, kita ingin password memiliki minimal 8 karakter
    // dan setidaknya mengandung satu angka dan satu huruf besar.
    if (password.length < 8) {
      return false;
    }
  
    if (!/\d/.test(password)) {
      return false;
    }
  
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // Jika password memenuhi semua persyaratan, kembalikan true
    return true;
  }