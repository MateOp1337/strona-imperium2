document.addEventListener('DOMContentLoaded', function() {
  const imagesToUpdate = [
      { selector: '.pi-logo', src: '/assets/media/icons/icon.png' },
      { selector: '.pi-emoji-doge', src: '/assets/media/icons/doge-bread.png' }
  ];

  imagesToUpdate.forEach(({ selector, src }) => {
      document.querySelectorAll(selector).forEach(e => {
          e.src = src;
          const fontSize = window.getComputedStyle(e).fontSize;
          const size = parseInt(fontSize, 10);
          e.width = size;
          e.height = size;
      });
  });
});


// Markdown

function convertMarkdownToHTML() {
  const elements = document.querySelectorAll('.md');
  elements.forEach(element => {
      let htmlText = element.innerHTML;
      const replacements = [
          { regex: /(?<!\\)\*\*(.*?)(?<!\\)\*\*/g, replacement: '<strong>$1</strong>' },
          { regex: /(?<!\\)\"\"(.*?)(?<!\\)\"\"/g, replacement: '<strong>$1</strong>' },
          { regex: /(?<!\\)__(.*?)(?<!\\)__ /g, replacement: '<u>$1</u>' },
          { regex: /(?<!\\)\*(.*?)(?<!\\)\*/g, replacement: '<em>$1</em>' },
          { regex: /(?<!\\)_(.*?)(?<!\\)_/g, replacement: '<em>$1</em>' },
          { regex: /```([\s\S]*?)```/g, replacement: '<div class="multiline-code">$1</div>' },
          { regex: /`([^`]+)`/g, replacement: '<code>$1</code>' },
          { regex: /\|\|(.*?)\|\|/g, replacement: '<span class="spoiler" onclick="toggleSpoiler(this)">$1</span>' },
          { regex: /\n[ \t]*# (.*?)(\n|$)/g, replacement: '<h1>$1</h1>' },
          { regex: /\n[ \t]*## (.*?)(\n|$)/g, replacement: '<h2>$1</h2>' },
          { regex: /\n[ \t]*### (.*?)(\n|$)/g, replacement: '<h3>$1</h3>' },
          { regex: /^\s*-\s+(.*?)(\n|$)/gm, replacement: '<li>$1</li>' },
          { regex: /^\s*\d+\.\s+(.*?)(\n|$)/gm, replacement: '<li>$1</li>' },
          { regex: /\n/g, replacement: '<br>' },
          { regex: /!\[([^\]]+)\]\(([^)]+)\)/g, replacement: '<img alt="$1" src="$2">' },
          { regex: /\[([^\]]+)\]\(([^)]+)\)/g, replacement: '<a href="$2" class="standardHref">$1</a>' },
          { regex: /^\s*>\s+(.*?)(\n|$)/gm, replacement: '<blockquote>$1</blockquote>' },
          { regex: /^\s*-{3,}\s*$/gm, replacement: '<hr>' },
          { regex: /\\([*_`])/g, replacement: '$1' },
          { regex: /timestamp:\((\d+)\)/g, replacement: (match, timestamp) => {
              const date = new Date(parseInt(timestamp) * 1000);
              return `<code class="timestamp" title="${date.toLocaleString()} (UTC+1)">${date.toLocaleString()} (UTC+1)</code>`;
          }}
      ];
      
      replacements.forEach(({ regex, replacement }) => {
          htmlText = htmlText.replace(regex, replacement);
      });

      element.innerHTML = htmlText;
  });
}

function toggleSpoiler(element) {
  element.classList.toggle('spoiler-reveal');
}

window.addEventListener('load', () => {
  setTimeout(() => { convertMarkdownToHTML(); }, 100);
  setInterval(() => { convertMarkdownToHTML(); }, 5000);
});