document.addEventListener("DOMContentLoaded", function () {
    function urlDecode(encodedString) {
        try {
          return decodeURIComponent(encodedString);
        } catch (error) {
          // Handle invalid or malformed input here
          console.error('Invalid URL-encoded string:', encodedString);
          return null;
        }
      }
      
      const encodedString = 'https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1rCLLXxKVgidEn4gWAm72z6qyPt7YzkTR%3Fusp%3Ddrive_link';
    function createShadowDOM() {
      var h1Element = document.querySelector("h1");
      var shadowRoot = h1Element.attachShadow({ mode: "open" });
      var div = document.createElement("div");
      div.textContent =urlDecode(encodedString);
  
      shadowRoot.appendChild(div);
    }
  
    createShadowDOM();
  });
  