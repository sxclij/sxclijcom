<script>
    const skills = [
        {
            title: "C言語",
            description:
                "一番経験年数が長く、一番得意で、一番好みの言語です。動的メモリ確保や外部ライブラリを縛りつつ、自作言語、UEFIアプリケーション、テキストエディタ、webサイトなどを作ってきました。小学生の頃から触ってきましたが、中学の頃に一度ソースコードを全て失ってしまったので、実際に持っている知識に対してGitHubに上げている成果物が少ない言語でもあります。",
        },
        {
            title: "インフラ",
            description:
                "自宅のサーバーでMinecraftやArkなどゲームのサーバー、このウェブサイトや家族の写真サーバーを立てたり保守したりしています。特に、ArchLinux、VirtualBox、DockerCompose、Sambaなどを好んで触っています。",
        },
        {
            title: "Webバックエンド",
            description:
                "個人的にはC++、TypeScript、Go、Rustが好みですが、必要に迫られてJavaScript、PHP、Pythonなどを触ったりもします。最近は設計とチューニング以外はLLMに任せっきりで、ほとんど確認作業のようになっている分野でもあります。",
        },
        {
            title: "Webフロントエンド",
            description:
                "始めてから一番日が浅い分野です。特に生のHTMLファイルを触ることを得意としています。流れとしては 生のHTMLファイル > React > Svelteという感じで、流行に乗ってReactを触ろうとしたものの、パフォーマンスが思うように出ずSvelteに流れ着きました。数年前までは必要に迫られて嫌々書いていましたが、最近はChatGPTやClaudeと会話しながら楽しく書けるようになってきました。",
        },
    ];

    const projects = [
        {
            name: "テキストエディタ",
            link: "https://github.com/sxclij/sxceditor2",
            description:
                "C言語を使用して、とてもコンパクトなテキストエディタを開発しています。",
        },
        {
            name: "自作プログラミング言語",
            link: "https://github.com/sxclij/sxcscript",
            description:
                "自作プログラミング言語を設計し、Scratch上で動作する独自のコンパイラやインタプリタの開発を行っています。",
        },
    ];

    const links = [
        {
            name: "Qiita: sxclij",
            url: "https://qiita.com/sxclij",
        },
        {
            name: "GitHub: sxclij",
            url: "https://github.com/sxclij",
        },
        {
            name: "Pagespeed: sxclij.com",
            url: "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fsxclij.com%2F",
        },
        {
            name: "Discord: sxclij-server",
            url: "https://discord.gg/yFtY7ym4DA",
        },
    ];
</script>

<svelte:head>
    <title>sxclij.com</title>
    <meta name="description" content="sxclijさんのポートフォリオ" />
</svelte:head>

<nav class="navbar">
    <ul>
        <li><a href="/">sxclij.com</a></li>
        <li><a href="#profile">プロフィール</a></li>
        <li><a href="#skills">スキル</a></li>
        <li><a href="#projects">プロジェクト</a></li>
        <li><a href="#links">リンク</a></li>
    </ul>
</nav>

<main>
    <header class="hero">
        <h1>sxclij</h1>
        <p>Student Developer | 自作言語・テキストエディタ開発者</p>
    </header>

    <section id="profile" class="section">
        <h2>プロフィール</h2>
        <p>
            sxclijです。スクさんと呼ばれています。C言語やScratch、Minecraftのコマンドなど、制約の強い環境下でのプログラム開発に取り組むことを得意とする学生エンジニアです。
            自作言語や、テキストエディタをC言語で書いたりしてます。一応Webやインフラなども触れます。
        </p>
    </section>

    <section id="skills" class="section">
        <h2>スキル</h2>
        {#each skills as skill}
            <h3>{skill.title}</h3>
            <p>
                {skill.description}
            </p>
        {/each}
    </section>

    <section id="projects" class="section">
        <h2>プロジェクト</h2>
        {#each projects as project}
            <h3>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {project.name}
                </a>
            </h3>
            <p>
                {project.description}
            </p>
        {/each}
    </section>

    <section id="links" class="section">
        <h2>リンク</h2>
        <ul class="links">
            {#each links as link}
                <li>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.name}
                    </a>
                </li>
            {/each}
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

    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #1e1e1e;
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
        color: #e0e0e0;
        font-size: 1rem;
        transition: color 0.3s;
    }

    .navbar a:hover {
        color: #81c784;
    }

    main {
        max-width: 800px;
        margin: 4rem auto 0;
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

    .section h2 {
        font-size: 1.8rem;
        border-bottom: 2px solid #81c784;
        padding-bottom: 0.3rem;
        margin-bottom: 1rem;
    }

    .section h3 {
        border-left: 6px solid;
        padding-left: 1rem;
        font-size: 1.125rem;
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
