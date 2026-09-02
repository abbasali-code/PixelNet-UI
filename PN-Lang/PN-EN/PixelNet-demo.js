/* ==================================================
PIXELNET UI — DEMO JAVASCRIPT
================================================== */

/* ==================================================
PN-DEMO CODE PREVIEW
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const templates = document.querySelectorAll("template");

  templates.forEach((template) => {
    const previewId = template.id.replace("-template", "");

    const preview = document.getElementById(previewId);

    if (!preview) {
      return;
    }

    preview.textContent = template.innerHTML.trim();
  });

  /* ==================================================
   PN-DEMO COPY CODE
   ================================================== */

  const copyButtons = document.querySelectorAll(".demo-copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copy;

      const codeElement = document.getElementById(targetId);

      if (!codeElement) {
        return;
      }

      const code = codeElement.textContent.trim();

      const originalText = button.textContent;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(code);
        } else {
          const textarea = document.createElement("textarea");

          textarea.value = code;

          textarea.style.position = "fixed";
          textarea.style.left = "-9999px";
          textarea.style.top = "0";

          document.body.appendChild(textarea);

          textarea.focus();
          textarea.select();

          document.execCommand("copy");

          textarea.remove();
        }

        button.textContent = "Copied!";
        button.classList.add("copied");

        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove("copied");
        }, 1500);
      } catch (error) {
        console.error("PixelNet Demo: Failed to copy code.", error);

        button.textContent = "Failed";

        setTimeout(() => {
          button.textContent = originalText;
        }, 1500);
      }
    });
  });
});
