<script>
    const profile = {
        icon: "/icon.svg",
        name: "sxclij",
        info: [
            {
                label: "所属",
                value: "無所属 / 無職",
            },
            {
                label: "好きな言語",
                value: "C / Go / Rust",
            },
            {
                label: "趣味",
                value: "読書 / 音ゲー / Nostr",
            },
        ],
    };
    const skills = [
        {
            title: "C言語",
            description:
                "一番経験年数が長く、一番得意で、一番好みの言語です。動的メモリ確保やライブラリを縛りつつ、自作言語、UEFIアプリケーション、テキストエディタ、webサイトなどを作ってきました。小学生の頃から触ってきましたが、中学の頃に一度ソースコードを全て失ってしまったので、実際に持っている知識に対してGitHubに上げている成果物が少ない言語でもあります。",
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
                "始めてから一番日が浅い分野です。特に生のHTMLファイルを触ることを得意としています。流れとしては 生のHTMLファイル > React > Svelteという感じで、流行に乗ってReactを触ろうとしたものの、パフォーマンスが思うように出ずSvelteに流れ着きました。数年前までは必要に迫られて嫌々書いていましたが、最近はChatGPTやClaude、Geminiと会話しながら楽しく書けるようになってきました。",
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
        <li><a href="#skills">スキル</a></li>
        <li><a href="#projects">プロジェクト</a></li>
        <li><a href="#links">リンク</a></li>
    </ul>
</nav>
<main>
    <header class="hero">
        <div class="hero-icon-container">
            <img src={profile.icon} alt="Profile Icon" class="profile-icon" />
        </div>
        <div class="hero-content-container">
            <h1>{profile.name}</h1>
            <div class="info-list">
                {#each profile.info as item}
                    <div class="info-item">
                        <div class="info-text">
                            <h2>{item.label}</h2>
                            <span class="info-value">{item.value}</span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </header>
    <section id="skills" class="section">
        <h2>スキル</h2>
        <div class="skill-list">
            {#each skills as skill}
                <div class="skill-item">
                    <h3>{skill.title}</h3>
                    <p>
                        {skill.description}
                    </p>
                </div>
            {/each}
        </div>
    </section>
    <section id="projects" class="section">
        <h2>プロジェクト</h2>
        <div class="project-list">
            {#each projects as project}
                <div class="project-item">
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
                </div>
            {/each}
        </div>
    </section>
    <section id="links" class="section">
        <h2>リンク</h2>
        <ul class="link-list">
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
  
    main {
      max-width: 85%;
      margin: 4rem auto 0;
      padding: 2rem 1rem;
      background: var(--card-background-color);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      border-radius: 8px;
    }
    .hero {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
      padding: 1rem;
    }
    .hero-icon-container {
      flex: 0 0 auto;
      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
    }
    .hero-content-container {
      flex: 1;
      text-align: left;
    }
    .profile-icon {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    .hero h1 {
      margin: 0;
      font-size: 2.5rem;
      color: var(--accent-color);
    }
    .hero p {
      margin: 0.5rem 0 0;
      font-size: 1.2rem;
      color: var(--secondary-text-color);
    }
    .info-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      max-width: 100%;
    }
    .info-item {
      background-color: var(--item-background-color);
      padding: 0.5rem;
      border-radius: 4px;
      box-sizing: border-box;
      min-width: 0;
    }
    .info-text {
      display: flex;
      flex-direction: column;
    }
    .info-item h2 {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0 0 0.2rem 0;
    }
  
    .section {
      margin-bottom: 2rem;
    }
  
    .section h2 {
      font-size: var(--font-size-h2);
      border-bottom: 2px solid var(--accent-color);
      padding-bottom: 0.3rem;
      margin-bottom: 1rem;
    }
  
    .section p {
      margin-bottom: 0.5rem;
    }
  
    .skill-list,
    .project-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  
    .skill-item h3,
    .project-item h3 {
        border-left-width: 6px;
        border-left-style: solid;
        padding-left: 1rem;
        font-size: var(--font-size-h3);
    }
  
    .link-list li {
      margin-bottom: 0.5rem;
    }
    .footer {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #e7e7e7;
    }
    @media (max-width: 768px) {
      .navbar {
        display: none;
      }
      .hero {
        flex-direction: column;
      }
      .hero-icon-container {
        margin-right: 0;
        margin-bottom: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
       .hero-content-container {
          width: 100%;
       }
      .profile-icon {
        width: 30%;
        height: 30%;
      }
      .info-list,
      .skill-list,
      .project-list {
        grid-template-columns: 1fr;
      }
      .info-item {
        max-width: 100%;
      }
    }
  </style>