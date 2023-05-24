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
  const title = 'Choose name';
  const content = /*html*/ `
    <main class="main__login">
        <form class="names_form stack-m" method="POST" action="/board">
            <p class="select_name">Your name:</p>
            <input type="radio" id="alphonso" name="name" value="alphonso">
            <label for="alphonso">Alphonso</label><br>

            <input type="radio" id="cameo" name="name" value="cameo">
            <label for="cameo">Cam</label><br>

            <input type="radio" id="beth" name="name" value="beth">
            <label for="beth">Beth</label><br>

            <input type="radio" id="mark" name="name" value="mark">
            <label for="mark">Mark</label><br>

            <input type="radio" id="simon" name="name" value="simon">
            <label for="simon">Simon</label><br>

            <input type="radio" id="taha" name="name" value="taha">
            <label for="taha">Taha</label><br>

            <input type="radio" id="tom" name="name" value="tom">
            <label for="tom">Tom</label><br>

            <input type="radio" id="zak" name="name" value="zak">
            <label for="zak">Zak</label><br>

            <button class="reset_name" type="reset">Reset</button>
            <button class="submit_name" type="submit">Submit</button>
        </form>
    </main>
  `;

  return layout(title, content);
};

function post(name) {
  return /*html*/ `
    <form method="POST" action="/post">
        <label for="artist">Artist name:</label>
        <input
            type="text"
            name="artist"
            id="artist">
        <label for="song">Song name:</label>
        <input
            type="text"
            name="song"
            id="song">
        <label for="link">Spotify Link:</label>
        <input
            type="text"
            name="link"
            id="link">
    <label>Enter your message:</label>
        <textarea
            name="message"
            id="message"
            rows="4"
            cols="30"
        ></textarea>
            <button type="submit" class="button" onclick="handleSubmit">
           Submit
            </button>
    </form>
    `;
}

function board(user, posts) {
  return /*html*/ `
    <header>
    <h1>Hello ${user}</h1>
    </header>
    <main>
    <ul>
    <button></button>
    </ul>
    <section>
    <h2>FAC27 Music Recs</h2>
        <ul>
        ${posts.map(boardPost).join('')}
        </ul>
    </section>
    </main>
    `;
}

function boardPost(boardPost) {
  return /*html*/ `
    <h2>${boardPost.name}</h2>
    <p>${boardPost.artist}</p>
    <p>${boardPost.song}</p>
    <p>${boardPost.url}</p>
    <p>${boardPost.message}</p>
    `;
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
`;
