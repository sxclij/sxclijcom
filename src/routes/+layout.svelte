<nav class="navbar">
    <ul>
        <li><a href="/">sxclij.com</a></li>
        <li><a href="/daily">日報</a></li>
    </ul>
</nav>
<slot></slot>

<style>
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
</style>
