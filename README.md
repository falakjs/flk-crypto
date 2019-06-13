# Crypto
A simple Encryption/Decryption handler.

> The current followed encryption algorithm is AES.

# Installation
`flk install flk-crypto`

OR 

`npm install flk-crypto`

Alias: `crypto`.

# Table of contents
- [Crypto](#crypto)
- [Installation](#installation)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
- [Available methods](#available-methods)
  - [encrypt](#encrypt)
    - [Examples](#examples)
  - [Decrypt](#decrypt)
    - [Examples](#examples-1)
- [Configurations](#configurations)


# Usage

```javascript
  let crypto = DI.resolve('crypto');

  let encryptedValue = crypto.encrypt('hello world');
```

# Available methods
- [encrypt](#encrypt)
- [get](#get)
- [has](#has)
- [remove](#remove)
- [clear](#clear)

## encrypt

`encrypt(value: any): String`
Encrypt the given value.

This method accepts any type of values, it will be handled automatically, that means you can encrypt scalar values (`string|boolean|number`), arrays or objects.

### Examples

```javascript
  let crypto = DI.resolve('crypto');

  let encryptedValue = crypto.encrypt('hello world');

  // encrypt objects
  let user = {
    name: 'Hasan',
    age: 30,
  };

  let encryptedObject = crypto.encrypt(user);
```

## Decrypt

`decrypt(encodedValue: String): any|null`
Decrypt the given encoded value.

### Examples

```javascript
let user = crypto.decrypt('some-encoded-value');
```

# Configurations
Available configurations for `crypto` in [Application configurations](https://github.com/falakjs/config).

**Main Configuration key**: `crypto`

| key           | Type      |Description                                                                            |
| ------------- |  ------------- | -------------------------------------------------------------------------------------- |
| key | `String` | Set the encryption/decryption key, by default it is the current application name. |