class Crypto {
    /**
     * Constructor
     */
    constructor() {
        this.key = Config.get('crypto.key', APP_NAME);
    }
    
    /**
     * Encrypt the given value
     * 
     * @param mixed value
     * @returns string
     */
    encrypt(value) {
        if (Is.object(value)) {
            value = JSON.stringify(value);
        }

        return CryptoJS.AES.encrypt(value, this.key).toString();
    }

    /**
     * Decrypt the given cipher text
     * 
     * @param string cipherText
     * @returns string
     */
    decrypt(cipherText) {
        try {
            let decrypted = CryptoJS.AES.decrypt(cipherText, this.key);

            let value = decrypted.toString(CryptoJS.enc.Utf8);

            if (Is.json(value)) {
                value = JSON.parse(value);
            }
    
            return value;
        } catch(e) {
            return null;
        }
    }
}

DI.register({
    class: Crypto,
    alias: 'crypto',
});