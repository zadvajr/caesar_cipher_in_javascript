# Caesar Cipher Program in JavaScript
Caesar Cipher is one of the simplest and most used encryption techniques. In this technique, each letter of the given text is replaced by a letter of some fixed number of positions down the alphabet.

For example, with a shift of 1, X would be replaced by Y, and Y would become Z, and so on. Julius Caesar was the first one who used it for communicating with his officials. Based on his name, this techniqe was named as Caesar Cipher technique.

An integer value is required to cipher a given text. the integer value is known as shift, which indicates the number of positions each letter of the text has been moved down.

See the figure below.

![image](./images/caeser_cipher.png)

We can mathematically represent the encryption of a letter by a shift in the following way:

Encryption phase with shift $` n = E_n (x) = (x + n) mod(26)$`

Decryption phase with shift $` n = D_n (x) = (x - n) mod(26)$`