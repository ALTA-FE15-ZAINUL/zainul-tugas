function palindrome(string:string) {
    if (string == string.split("").reverse("").join("")) {
      return "true";
    } else {
      return "false";
    }
  }
  console.log(palindrome("civic")); // true
  console.log(palindrome("katak")); // true
  console.log(palindrome("kasur rusak")); // true
  console.log(palindrome("kupu-kupu")); // false
  console.log(palindrome("lion")); // false
  