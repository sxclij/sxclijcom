<script>
    let sections = [
      { id: "profile", title: "プロフィール", content: "sxclijです。スクさんと呼ばれています。C言語やScratch、Minecraftのコマンドなど、制約の強い環境下でのプログラム開発に取り組むことを得意とする学生エンジニアです。自作言語や、テキストエディタをC言語で書いたりしてます。一応Webやインフラなども触れます。" },
      { id: "skills", title: "スキル", content: "一番経験年数が長く、一番得意で、一番好みの言語です。動的メモリ確保や外部ライブラリを縛りつつ、自作言語、UEFIアプリケーション、テキストエディタ、webサイトなどを作ってきました。小学生の頃から触ってきましたが、中学の頃に一度ソースコードを全て失ってしまったので、実際に持っている知識に対してGitHubに上げている成果物が少ない言語でもあります。" },
      { id: "projects", title: "プロジェクト", content: "C言語を使用して、とてもコンパクトなテキストエディタを開発しています。自作プログラミング言語を設計し、Scratch上で動作する独自のコンパイラやインタプリタの開発を行っています。" },
      { id: "links", title: "リンク", content: "Qiita: sxclij, GitHub: sxclij, Pagespeed: sxclij.com, Discord: sxclij-server" }
    ];
    
    let navbarLinks = [
      { label: "sxclij.com", href: "" },
      { label: "プロフィール", href: "#profile" },
      { label: "スキル", href: "#skills" },
      { label: "プロジェクト", href: "#projects" },
      { label: "リンク", href: "#links" }
    ];
  </script>
  
  <svelte:head>
    <title>sxclij.com</title>
    <meta name="description" content="sxclijさんのポートフォリオ" />
  </svelte:head>
  
  <nav class="navbar">
    <ul>
      {#each navbarLinks as { label, href }}
        <li><a href={href}>{label}</a></li>
      {/each}
    </ul>
  </nav>
  
  <main>
    <header class="hero">
      <h1>sxclij</h1>
      <p>Student Developer | 自作言語・テキストエディタ開発者</p>
    </header>
  
    {#each sections as { id, title, content }}
      <section id={id} class="section">
        <h2>{title}</h2>
        <p>{content}</p>
      </section>
    {/each}
  
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
  
    .section {
      margin-bottom: 2rem;
    }
  
    .section h2 {
      font-size: 1.8rem;
      border-bottom: 2px solid #81c784;
      padding-bottom: 0.3rem;
      margin-bottom: 1rem;
    }
  
    .footer {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #e7e7e7;
    }
  </style>
  