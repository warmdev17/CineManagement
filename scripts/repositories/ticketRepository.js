export const getAllTickets = () => {
  const tickets = localStorage.getItem("tickets");
  return tickets ? JSON.parse(tickets) : null;
};

export const saveTickets = (tickets) => {
  localStorage.setItem("tickets", JSON.stringify(tickets));
};
