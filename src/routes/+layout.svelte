<nav class="navbar">
    <ul>
        <li><a href="/">sxclij.com</a></li>
        <li><a href="/daily">日報</a></li>
    </ul>
</nav>
<slot></slot>
<footer class="footer">
    <p>© 2024 sxclij. All rights reserved.</p>
</footer>

<svelte:head>
    <title>sxclij.com</title>
    <meta name="description" content="sxclijさんのお手製サイト" />
</svelte:head>

<style>
    :root {
        --primary-text-color: #e0e0e0;
        --secondary-text-color: #bdbdbd;
        --accent-color: #81c784;
        --link-color: #64b5f6;
        --background-color: #121212;
        --card-background-color: #1e1e1e;
        --item-background-color: #282828;
        --font-size-base: 1rem;
        --font-size-h2: 1.8rem;
        --font-size-h3: 1.125rem;
    }
    :global(body) {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        line-height: 1.6;
        background-color: var(--background-color);
        color: var(--primary-text-color);
    }
    :global(a) {
        color: var(--link-color);
        text-decoration: none;
        font-weight: bold;
    }
    :global(a:hover) {
        text-decoration: underline;
    }
    :global(a:visited) {
        color: var(--accent-color);
    }
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--card-background-color);
        padding: 0.5rem 1rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
    .navbar ul {
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    .navbar li {
        margin: 0 1rem;
    }
    .navbar a {
        color: var(--primary-text-color);
        font-size: var(--font-size-base);
        transition: color 0.3s;
    }
    .navbar a:hover {
        color: var(--accent-color);
    }
    .footer {
        text-align: center;
        margin-top: 2rem;
        font-size: 0.9rem;
        color: #e7e7e7;
    }
</style>
