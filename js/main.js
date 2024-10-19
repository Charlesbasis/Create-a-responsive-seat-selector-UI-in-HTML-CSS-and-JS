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

const seatingContainer = document.getElementById('seating');

// Create 4 seat maps with 4 rows and 4 columns each
for (let i = 0; i < 4; i++) {
  seatingContainer.appendChild(createSeatMap(4, 4));
}