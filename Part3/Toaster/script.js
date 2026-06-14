function createToaster(config) {
  return function (notification) {
    let toast = document.createElement("div");
    toast.classList = `fixed ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "top" ? "top-5" : "bottom-5"} ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} px-6 py-5 rounded shadow-lg pointer-events-none transition-opacity duration-300`;
    toast.textContent = notification;
    document.body.appendChild(toast);

    setTimeout(() => {
      document.body.removeChild(toast);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 2,
});
toaster("Hey how are you");
