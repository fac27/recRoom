const layout = (title, content) => {
  return /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <title>${title}</title>
        <style>${styles}</style>
      </head>
      <body class="center stack-xl">
        ${content}
      </body>
    </html>
  `;
};

const home = () => {
  const names = [
    'alphonso',
    'cameo',
    'beth',
    'mark',
    'simon',
    'taha',
    'tom',
    'zack',
  ];

  const nameEls = names.map((name) => {
    return /*html*/ `
        <input type="radio" id=${name} name="name" value=${name}>
        <label for=${name}>${name[0].toUpperCase()}${name.slice(1)}</label><br>
    `;
  });

  const title = 'Choose name';
  const content = /*html*/ `
    <main class="main__login">
        <form class="names_form stack-m" method="POST" action="/">
            <p class="select_name">Your name:</p>

            ${nameEls.join('')}

            <button class="reset_name" type="reset">Reset</button>
            <button class="submit_name" type="submit">Submit</button>
        </form>
    </main>
  `;

  return layout(title, content);
};

function board(user, posts) {
  const title = 'Music Recs';
  const postEls = posts.map((post) => {
    return /*html*/ `
    <article class="stack-s post_article">
        <p class="artist">${post.artist}</p>
        <p class="song">${post.song}</p>
        <p class="posted_at">${post.posted_at}</p>
    </article>
    `;
  });

  const content = /*html*/ `
    <header class="posts_header">
        <h1>Hello, ${user[0].toUpperCase()}${user.slice(1)}</h1>
    </header>

    <main class="posts_section">
        <h2 class="music_recs_title">FAC27 Music Recs</h2>
        ${postEls.join('')}
    </main>

    <footer>
        The Best Music Recommendation App!
    </footer>
    `;

  return layout(title, content);
}

module.exports = { home, board };

const styles = /*css*/ `
    * {
        margin: 0;
        padding: 0;
        box-sizing: bodrder-box;
    }

    html {
        --bg-primary: rgba(250,250,250,255);
        scroll-behaviour: smooth;
    }

    body {
        background: var(--bg-primary);
        font-family: 'Roboto', sans-serif;
    }

    .center {
        margin-left: auto;
        margin-right: auto;
        width: 60%;
    }

    .flex {
        display: flex;
    }

    .row {
        flex-direction: row;
    }

    .column {
        flex-direction: column;
    }

    .stack-s > * + * {
        margin-top: 0.5rem;
    }

    .stack-m > * + * {
        margin-top: 1.5rem;
    }

    .stack-xl > * + * {
        margin-top: 4rem;
    }

    .main__login {
        margin-top: 3rem;
    }

    form {
        font-size: 1.4rem;
    }

    form .select_name {
        margin-bottom: 1rem;
    }

    form label, form input {
        cursor: pointer;
    }

    input[type='radio'] {
        transform: scale(1.3);
    }

    .names_form button {
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;
        border: 1px solid grey;
        margin-right: 0.4rem;
        cursor: pointer;
    }

    .posts_header {
        margin-top: 2rem;
    }

    .music_recs_title {
        border-bottom: 1px solid black;
    }

    .post_article {
        margin-top: 2rem;
        border: 1px solid #617289;
        border-radius: 0.4rem;
        width: 35%;
        padding: 1rem;
    }

    footer {
        text-align: center;
        margin: 12rem 0 2rem 0;
        font-weight: bold;
    }
`;
