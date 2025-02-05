document.addEventListener('DOMContentLoaded', () => {
  class HeroVideo {
    constructor() {
      this.video = document.querySelector('[data-hero-video-player]');
      if (!this.video) return;
      
      this.init();
    }

    init() {
      this.video.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.video.pause();
        } else {
          this.video.play().catch(() => {});
        }
      });
    }
  }

  if (document.querySelector('[data-hero-video]')) {
    new HeroVideo();
  }
});
