(function () {
    "use strict";


    /* ============================================================
       CHARACTER SETS
       ============================================================ */

    const CHAR_SETS = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?/~`"
    };


    /* ============================================================
       DOM REFERENCES
       ============================================================ */

    const passwordOutput =
        document.getElementById("passwordOutput");

    const copyBtn =
        document.getElementById("copyBtn");

    const copiedToast =
        document.getElementById("copiedToast");

    const generateBtn =
        document.getElementById("generateBtn");

    const lengthSlider =
        document.getElementById("lengthSlider");

    const lengthValue =
        document.getElementById("lengthValue");

    const optUppercase =
        document.getElementById("optUppercase");

    const optLowercase =
        document.getElementById("optLowercase");

    const optNumbers =
        document.getElementById("optNumbers");

    const optSymbols =
        document.getElementById("optSymbols");

    const optionsWarning =
        document.getElementById("optionsWarning");

    const strengthLabel =
        document.getElementById("strengthLabel");

    const strengthFill =
        document.getElementById("strengthFill");


    const allOptionCheckboxes = [
        optUppercase,
        optLowercase,
        optNumbers,
        optSymbols
    ];


    /* ============================================================
       SECURE RANDOM INTEGER GENERATOR

       Uses crypto.getRandomValues() with rejection sampling
       to avoid modulo bias.
       ============================================================ */

    function secureRandomInt(maxExclusive) {

        if (maxExclusive <= 0) {
            return 0;
        }

        const cryptoObj =
            window.crypto || window.msCrypto;

        const range = 256;

        const maxUsable =
            Math.floor(range / maxExclusive) *
            maxExclusive;

        let randomByte;

        const buffer =
            new Uint8Array(1);

        do {

            cryptoObj.getRandomValues(buffer);

            randomByte = buffer[0];

        } while (randomByte >= maxUsable);

        return randomByte % maxExclusive;
    }


    /* ============================================================
       SECURE FISHER-YATES SHUFFLE
       ============================================================ */

    function secureShuffle(array) {

        for (
            let i = array.length - 1;
            i > 0;
            i--
        ) {

            const j =
                secureRandomInt(i + 1);

            [
                array[i],
                array[j]
            ] = [
                    array[j],
                    array[i]
                ];
        }

        return array;
    }


    /* ============================================================
       GET ACTIVE CHARACTER CATEGORIES
       ============================================================ */

    function getActiveCategories() {

        const categories = [];

        if (optUppercase.checked) {
            categories.push(CHAR_SETS.uppercase);
        }

        if (optLowercase.checked) {
            categories.push(CHAR_SETS.lowercase);
        }

        if (optNumbers.checked) {
            categories.push(CHAR_SETS.numbers);
        }

        if (optSymbols.checked) {
            categories.push(CHAR_SETS.symbols);
        }

        return categories;
    }


    /* ============================================================
       PASSWORD GENERATION
       ============================================================ */

    function generatePassword() {

        const categories =
            getActiveCategories();

        if (categories.length === 0) {

            showOptionsWarning();

            return null;
        }

        hideOptionsWarning();

        const length =
            parseInt(
                lengthSlider.value,
                10
            );

        const combinedPool =
            categories.join("");

        const passwordChars = [];


        // Guarantee at least one character
        // from every selected category.
        categories.forEach((set) => {

            const randIndex =
                secureRandomInt(set.length);

            passwordChars.push(
                set[randIndex]
            );
        });


        // Fill remaining characters.
        for (
            let i = passwordChars.length;
            i < length;
            i++
        ) {

            const randIndex =
                secureRandomInt(
                    combinedPool.length
                );

            passwordChars.push(
                combinedPool[randIndex]
            );
        }


        let finalChars = passwordChars;


        if (finalChars.length > length) {

            finalChars =
                secureShuffle(finalChars)
                    .slice(0, length);

        } else {

            finalChars =
                secureShuffle(finalChars);
        }


        return finalChars.join("");
    }


    /* ============================================================
       PASSWORD STRENGTH EVALUATION
       ============================================================ */

    function evaluateStrength(password) {

        if (!password) {

            return {
                level: -1,
                label: "—",
                percent: 0
            };
        }


        const length =
            password.length;

        let varietyCount = 0;


        if (/[A-Z]/.test(password)) {
            varietyCount++;
        }

        if (/[a-z]/.test(password)) {
            varietyCount++;
        }

        if (/[0-9]/.test(password)) {
            varietyCount++;
        }

        if (/[^A-Za-z0-9]/.test(password)) {
            varietyCount++;
        }


        let score = 0;


        if (length >= 8) {
            score++;
        }

        if (length >= 12) {
            score++;
        }

        if (length >= 16) {
            score++;
        }

        if (length >= 24) {
            score++;
        }


        score += varietyCount;


        let level;


        if (score <= 2) {

            level = 0;

        } else if (score <= 4) {

            level = 1;

        } else if (score <= 6) {

            level = 2;

        } else {

            level = 3;
        }


        const labels = [
            "Weak",
            "Medium",
            "Strong",
            "Very Strong"
        ];

        const percents = [
            25,
            50,
            75,
            100
        ];


        return {
            level,
            label: labels[level],
            percent: percents[level]
        };
    }


    /* ============================================================
       STRENGTH COLORS
       ============================================================ */

    const strengthColors = [

        "var(--strength-weak)",

        "var(--strength-medium)",

        "var(--strength-strong)",

        "var(--strength-vstrong)"
    ];


    /* ============================================================
       UPDATE STRENGTH UI
       ============================================================ */

    function updateStrengthUI(password) {

        const {
            level,
            label,
            percent
        } = evaluateStrength(password);


        strengthLabel.textContent =
            label;


        strengthLabel.style.color =
            level >= 0
                ? strengthColors[level]
                : "var(--text-muted)";


        strengthFill.style.width =
            percent + "%";


        strengthFill.style.background =
            level >= 0
                ? strengthColors[level]
                : "var(--bg-elevated-solid)";
    }


    /* ============================================================
       WARNING HELPERS
       ============================================================ */

    function showOptionsWarning() {

        optionsWarning.classList.add("show");
    }


    function hideOptionsWarning() {

        optionsWarning.classList.remove("show");
    }


    /* ============================================================
       ENFORCE AT LEAST ONE OPTION
       ============================================================ */

    function enforceAtLeastOneOption(
        changedCheckbox
    ) {

        const checkedCount =
            allOptionCheckboxes.filter(
                (cb) => cb.checked
            ).length;


        if (checkedCount === 0) {

            changedCheckbox.checked = true;

            showOptionsWarning();

            setTimeout(
                hideOptionsWarning,
                1800
            );

            return false;
        }

        return true;
    }


    /* ============================================================
       GENERATE BUTTON
       ============================================================ */

    function runGenerate() {

        const password =
            generatePassword();


        if (password === null) {
            return;
        }


        passwordOutput.value =
            password;


        updateStrengthUI(
            password
        );


        resetCopyState();


        generateBtn.classList.add(
            "spin"
        );


        setTimeout(() => {

            generateBtn.classList.remove(
                "spin"
            );

        }, 300);
    }


    /* ============================================================
       RESET COPY STATE
       ============================================================ */

    function resetCopyState() {

        copyBtn.classList.remove(
            "copied"
        );

        copiedToast.classList.remove(
            "show"
        );
    }


    /* ============================================================
       COPY TO CLIPBOARD
       ============================================================ */

    async function copyPassword() {

        const value =
            passwordOutput.value;


        if (!value) {
            return;
        }


        let success = false;


        try {

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                await navigator.clipboard.writeText(
                    value
                );

                success = true;
            }

        } catch (err) {

            success = false;
        }


        /* ========================================================
           FALLBACK COPY METHOD
           ======================================================== */

        if (!success) {

            try {

                const tempTextArea =
                    document.createElement(
                        "textarea"
                    );


                tempTextArea.value =
                    value;


                tempTextArea.setAttribute(
                    "readonly",
                    ""
                );


                tempTextArea.style.position =
                    "fixed";

                tempTextArea.style.top =
                    "-9999px";

                tempTextArea.style.left =
                    "-9999px";


                document.body.appendChild(
                    tempTextArea
                );


                tempTextArea.select();

                tempTextArea.setSelectionRange(
                    0,
                    value.length
                );


                success =
                    document.execCommand(
                        "copy"
                    );


                document.body.removeChild(
                    tempTextArea
                );

            } catch (err) {

                success = false;
            }
        }


        /* ========================================================
           COPY SUCCESS UI
           ======================================================== */

        if (success) {

            copyBtn.classList.add(
                "copied"
            );

            copiedToast.classList.add(
                "show"
            );


            setTimeout(() => {

                copyBtn.classList.remove(
                    "copied"
                );

                copiedToast.classList.remove(
                    "show"
                );

            }, 1600);
        }
    }


    /* ============================================================
       EVENT LISTENERS
       ============================================================ */

    lengthSlider.addEventListener(
        "input",
        () => {

            lengthValue.textContent =
                lengthSlider.value;


            lengthSlider.setAttribute(
                "aria-valuenow",
                lengthSlider.value
            );
        }
    );


    generateBtn.addEventListener(
        "click",
        runGenerate
    );


    copyBtn.addEventListener(
        "click",
        copyPassword
    );


    allOptionCheckboxes.forEach(
        (checkbox) => {

            checkbox.addEventListener(
                "change",
                () => {

                    enforceAtLeastOneOption(
                        checkbox
                    );
                }
            );
        }
    );


    passwordOutput.addEventListener(
        "keydown",
        (e) => {

            if (e.key === "Enter") {

                e.preventDefault();

                runGenerate();
            }
        }
    );


    /* ============================================================
       INITIALIZE
       ============================================================ */

    runGenerate();

})();