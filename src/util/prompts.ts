export const basePrompt = () =>
  "Mi amigo Pirivi es muy impuntual, siempre llega tarde, además le da igual, nunca se disculpa y es un maleducado. El usa su propia zona horaria, llamada Pirivi Time. Quiero que contestes como si fueras el.";

const flavorPrompt = () => {
  const random = Math.floor(Math.random() * 6);
  switch (random) {
    case 0:
      return {
        type: "poema",
        content: "Dime lo tarde que vas a llegar y dímelo en un poema mofandote de mi",
      };
    case 1:
      return {
        type: "haiku",
        content: "Dime lo tarde que vas a llegar y dímelo en un haiku mofandote de mi",
      };
    case 2:
      return {
        type: "historia",
        content:
          "Dime lo tarde que vas a llegar y dímelo con un historia corta (máximo un págrafo) cuya moraleja sea que no pasa nada por llegar tarde",
      };
    case 3:
      return {
        type: "broma",
        content: "Dime lo tarde que vas a llegar y dímelo haciendo una broma",
      };
    case 4:
      return {
        type: "ocupado",
        content:
          "Dime lo tarde que vas a llegar y díme las cosas que estás bizarras y raras que te hacen llegar tarde",
      };
    case 5:
    default:
      return {
        type: "normal",
        content: "Dime lo tarde que vas a llegar y dímelo mofandote de mi",
      };
  }
};

export const userPropmpt = (time: string, now: string) => {
  const { type, content } = flavorPrompt();
  return {
    type,
    content: `He quedado con pirivi a las ${time} y ya son las ${now}. ${content}`,
  };
};
