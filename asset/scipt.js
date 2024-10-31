const coefficients = {
    condition: {
        '99%': 0,       // Không giảm
        '90%': -200000, // Giảm 200k
        '80%': -200000  // Giảm 200k
    },
    ram: {
        '4gb': 0,       // Không tăng
        '8gb': 150000,  // Tăng 150k
        '16gb': 300000  // Tăng 300k
    },
    battery: {
        '1.5h': 0,      // Giá cơ bản
        '2h': 100000,   // Tăng 100k
        '3h': 200000    // Tăng 200k
    }
};

// Giá trị gốc cho i3 từ gen 2 và gen 10
const basePrices = {
    i3: { genLow: 2, priceLow: 1150000, genHigh: 10, priceHigh: 3000000 },
    i5: { genLow: 2, priceLow: 1200000, genHigh: 10, priceHigh: 3500000 },
    i7: { genLow: 2, priceLow: 1300000, genHigh: 10, priceHigh: 4000000 }
};

// Hàm tính giá động dựa trên gen hiện tại
function calculateDynamicPrice(cpu, gen) {
    const { genLow, priceLow, genHigh, priceHigh } = basePrices[cpu];
    
    // Tính khoảng cách giá giữa các thế hệ
    const pricePerGen = (priceHigh - priceLow) / (genHigh - genLow);
    
    // Tính giá cho gen hiện tại
    return priceLow + (pricePerGen * (parseInt(gen) - genLow));
}

// Hàm tính giá mua và giá bán
function calculatePrice() {
    // Lấy giá trị từ các combo box
    const condition = document.getElementById('condition').value;
    const cpu = document.getElementById('cpu').value;
    const gen = document.getElementById('gen').value;
    const battery = document.getElementById('battery').value;
    const ram = document.getElementById('ram').value;

    // Tính giá cơ bản dựa trên CPU và gen
    const basePrice = calculateDynamicPrice(cpu, gen);

    // Tính điều chỉnh giá trị từ các thông số
    const conditionAdjustment = coefficients.condition[condition] || 0;
    const ramAdjustment = coefficients.ram[ram] || 0;
    const batteryAdjustment = coefficients.battery[battery] || 0;

    // Tính giá mua
    const purchasePrice = basePrice + conditionAdjustment + ramAdjustment + batteryAdjustment;

    // Hiển thị giá mua vào ô nhập liệu
    document.getElementById('purchasePrice').value = purchasePrice.toFixed(0);

    // Tính giá bán:
    const salePrice = purchasePrice * 2.67;

    // Hiển thị giá bán:
    document.getElementById('salePrice').value = salePrice.toFixed(0);
}

// Gọi hàm để tính giá mua (ví dụ)
calculatePrice();
