<script>
    let x = 1;
</script>

<svelte:head>
    <title>sxclij - Portfolio</title>
    <meta name="description" content="C言語やScratch、マインクラフトのコマンドを活用し、自作言語の開発に取り組むsxclijさんのポートフォリオです。">
</svelte:head>

<main>
    <header class="hero">
        <h1>sxclij</h1>
        <p>Student Developer | 自作言語・テキストエディタ開発者</p>
    </header>

    <section class="section">
        <h2>プロフィール</h2>
        <p>
            sxclijです。スクさんと呼ばれています。C言語やScratch、マインクラフトのコマンドなど、制約の強い環境下でのプログラム開発に取り組むことを得意とするエンジニアです。
            主に自作言語の開発や、独自のテキストエディタをC言語で構築するプロジェクトに注力しています。
        </p>
    </section>

    <section class="section">
        <h2>プロジェクト</h2>
        <ul>
            <li>
                <h3>テキストエディタの開発</h3>
                <p>
                    C言語を使用して、とてもコンパクトな
                    <a href="https://github.com/sxclij/sxceditor2" target="_blank" rel="noopener noreferrer">テキストエディタ</a>を開発しています。
                </p>
            </li>
            <li>
                <h3>自作プログラミング言語</h3>
                <p>
                    趣味として
                    <a href="https://github.com/sxclij/sxcscript" target="_blank" rel="noopener noreferrer">自作プログラミング言語</a>
                    を設計し、独自のコンパイラやインタプリタの開発を行っています。
                </p>
            </li>
        </ul>
    </section>

    <section class="section">
        <h2>リンク</h2>
        <ul class="links">
            <li>
                <a href="https://qiita.com/sxclij" target="_blank" rel="noopener noreferrer">
                    Qiita: sxclij
                </a>
            </li>
            <li>
                <a href="https://github.com/sxclij" target="_blank" rel="noopener noreferrer">
                    GitHub: sxclij
                </a>
            </li>
            <li>
                <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fsxclij.duckdns.org%2F" target="_blank" rel="noopener noreferrer">
                    Pagespeed: sxclij
                </a>
            </li>
            <li>
                <a href="https://discord.gg/yFtY7ym4DA" target="_blank" rel="noopener noreferrer">
                    Discord: sxclij-server
                </a>
            </li>
        </ul>
    </section>

    <footer class="footer">
        <p>© 2024 sxclij. All rights reserved.</p>
    </footer>
</main>

<style>
    :global(body) {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        line-height: 1.6;
        background-color: #121212;
        color: #e0e0e0;
    }

    :global(a) {
        color: #64b5f6;
        text-decoration: none;
        font-weight: bold;
    }

    :global(a:hover) {
        text-decoration: underline;
    }

    :global(a:visited) {
        color: #81c784;
    }

    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1rem;
        background: #1e1e1e;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
    }

    .hero {
        text-align: center;
        margin-bottom: 2rem;
    }

    .hero h1 {
        margin: 0;
        font-size: 2.5rem;
        color: #81c784;
    }

    .hero p {
        margin: 0.5rem 0 0;
        font-size: 1.2rem;
        color: #bdbdbd;
    }

    .section {
        margin-bottom: 2rem;
    }

    .section h2 {
        font-size: 1.8rem;
        border-bottom: 2px solid #81c784;
        padding-bottom: 0.3rem;
        margin-bottom: 1rem;
    }

    .links li {
        margin-bottom: 0.5rem;
    }

    .footer {
        text-align: center;
        margin-top: 2rem;
        font-size: 0.9rem;
        color: #e7e7e7;
    }
</style>
