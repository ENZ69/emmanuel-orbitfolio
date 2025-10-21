import GitHubCalendar from 'react-github-calendar';

const GitHubStats = () => {
  const username = "pnzaou";
  
  // Configuration pour les thèmes sombres qui matchent notre design
  const theme = "radical";
  const bgColor = "0d1117";
  const titleColor = "4A9EFF";
  const textColor = "c9d1d9";
  const iconColor = "A855F7";
  const borderColor = "30363d";

  return (
    <section id="github-stats" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Statistiques GitHub</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mes contributions et activités sur GitHub
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* GitHub Stats Card */}
          <div className="glass-card p-6 hover-glow animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-primary">📊 Statistiques générales</h3>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&bg_color=${bgColor}&title_color=${titleColor}&text_color=${textColor}&icon_color=${iconColor}&border_color=${borderColor}&hide_border=false&count_private=true&show=reviews,prs_merged,prs_merged_percentage`}
                alt="GitHub Stats"
                className="w-full max-w-lg rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top Languages */}
          <div className="glass-card p-6 hover-glow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold mb-6 text-secondary">💻 Langages les plus utilisés</h3>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&bg_color=${bgColor}&title_color=${titleColor}&text_color=${textColor}&border_color=${borderColor}&hide_border=false&langs_count=8`}
                alt="Top Languages"
                className="w-full max-w-lg rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* GitHub Streak Stats */}
          <div className="glass-card p-6 hover-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6 text-accent">🔥 Séries de contributions</h3>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&background=${bgColor}&border=${borderColor}&stroke=${borderColor}&ring=${titleColor}&fire=${iconColor}&currStreakNum=${textColor}&sideNums=${textColor}&currStreakLabel=${titleColor}&sideLabels=${titleColor}&dates=${textColor}`}
                alt="GitHub Streak"
                className="w-full max-w-lg rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="glass-card p-6 hover-glow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-6 text-gradient">📈 Graphique de contributions</h3>
            <div className="flex justify-center overflow-x-auto">
              <GitHubCalendar 
                username={username}
                colorScheme="dark"
                blockSize={12}
                fontSize={14}
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
