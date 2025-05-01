document.addEventListener('alpine:init', () => {
  Alpine.data('modalComponent', () => ({
    visible: false,
    active: false,
    title: '',
    content: '',
    size: 'medium',

    init() {
      window.Modal = {
        open: ({ title = '', content = '', size = '' }) => {
          this.title = title;
          this.content = content;
          this.size = size;
          this.visible = true;
          this.$nextTick(() => {
            requestAnimationFrame(() => {
              this.active = true;
              document.body.classList.add('overflow-hidden');
            });
          });
        },
        close: () => {
          this.active = false;
          setTimeout(() => {
            this.visible = false;
            this.title = '';
            this.content = '';
            this.size = '';
            document.body.classList.remove('overflow-hidden');
          }, 300);
        }
      };
    }
  }));
});
