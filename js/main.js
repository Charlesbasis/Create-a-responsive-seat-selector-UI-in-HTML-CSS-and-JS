function createSeatMap(rows, cols) {
  const seatMap = document.createElement('div');
  seatMap.classList.add('seat-map');
  
  for (let r = 0; r < rows; r++) {
      const row = document.createElement('div');
      row.classList.add('row');
      
      for (let c = 0; c < cols; c++) {
          const seat = document.createElement('div');
          seat.classList.add('seat');
          row.appendChild(seat);
      }
      
      seatMap.appendChild(row);
  }
  
  return seatMap;
}

const [seatingLeftContainerFrontGroup, seatingMiddleContainerFrontGroup, seatingRightContainerFrontGroup] = [
  document.getElementById("seating-left-front-group"),
  document.getElementById("seating-middle-front-group"),
  document.getElementById("seating-right-front-group")
];

// Create seat map with rows and columns each
for (let i = 0; i < 1; i++) {
  seatingLeftContainerFrontGroup.appendChild(createSeatMap(4, 4));
  seatingMiddleContainerFrontGroup.appendChild(createSeatMap(4, 10));
  seatingRightContainerFrontGroup.appendChild(createSeatMap(4, 4));  
}

const [seatingLeftContainerMiddleGroup, seatingMiddleContainerMiddleGroup, seatingRightContainerMiddleGroup] = [
  document.getElementById("seating-left-middle-group"),
  document.getElementById("seating-middle-middle-group"),
  document.getElementById("seating-right-middle-group")
];

// Create seat map with rows and columns each
for (let i = 0; i < 1; i++) {
  seatingLeftContainerMiddleGroup.appendChild(createSeatMap(4, 4));
  seatingMiddleContainerMiddleGroup.appendChild(createSeatMap(4, 10));
  seatingRightContainerMiddleGroup.appendChild(createSeatMap(4, 4));  
}

const [seatingLeftContainerBackGroup, seatingMiddleContainerBackGroup, seatingRightContainerBackGroup] = [
  document.getElementById("seating-left-back-group"),
  document.getElementById("seating-middle-back-group"),
  document.getElementById("seating-right-back-group")
];

// Create seat map with rows and columns each
for (let i = 0; i < 1; i++) {
  seatingLeftContainerBackGroup.appendChild(createSeatMap(7, 4));
  seatingMiddleContainerBackGroup.appendChild(createSeatMap(7, 10));
  seatingRightContainerBackGroup.appendChild(createSeatMap(7, 4));
}

