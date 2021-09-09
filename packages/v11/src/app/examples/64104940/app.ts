declare global {
  interface Window {
    lotame_123: {
      cmd: any;
      collect: any;
    };
  }
}

export const collectLotameData = (title: string, name: string) => {
  window.lotame_123.cmd.push(function () {
    window.lotame_123.collect({
      behaviors: {
        act: [`tracking : ${title} : ${name}`],
      },
    });
  });
};
