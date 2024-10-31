const coefficients = {
    condition: {
        '99%': 0,     // Không giảm
        '90%': -200000, // Giảm 200k
        '80%': -200000  // Giảm 200k
    },
    ram: {
        '4gb': 0,     // Không tăng
        '8gb': 150000, // Tăng 150k
        '16gb': 300000 // Tăng 300k
    },
    gen: {
        i3: { 
            '2th': 1150000,
            '3th': 1381250,
            '4th': 1612500,
            '5th': 1843750,
            '6th': 2075000,
            '7th': 2306250,
            '8th': 2537500,
            '9th': 2768750,
            '10th': 3000000,
            '11th': 3231250,
            '12th': 3462500
        },
        i5: { 
            '2th': 1200000,
            '3th': 1487500,
            '4th': 1775000,
            '5th': 2062500,
            '6th': 2350000,
            '7th': 2637500,
            '8th': 2925000,
            '9th': 3212500,
            '10th': 3500000,
            '11th': 3787500,
            '12th': 4075000
        },
        i7: { 
            '2th': 1300000,
            '3th': 1637500,
            '4th': 1975000,
            '5th': 2312500,
            '6th': 2650000,
            '7th': 2987500,
            '8th': 3325000,
            '9th': 3662500,
            '10th': 4000000,
            '11th': 4337500,
            '12th': 4675000
        }
    },
    battery: {
        '1.5h': 0,    // Giá cơ bản
        '2h': 100000,  // Tăng 100k
        '3h': 200000   // Tăng 200k
    }
};

// Hàm tính giá mua
function calculatePrice() {
    // Lấy giá trị từ các combo box
    const brand = document.getElementById('brand').value;
    const condition = document.getElementById('condition').value;
    const cpu = document.getElementById('cpu').value;
    const gen = document.getElementById('gen').value;
    const battery = document.getElementById('battery').value;
    const ram = document.getElementById('ram').value;

    // Tính giá cơ bản dựa trên CPU và gen
    const basePrice = coefficients.gen[cpu][gen] || 0;

    // Tính điều chỉnh giá trị từ các thông số
    const conditionAdjustment = coefficients.condition[condition] || 0;
    const ramAdjustment = coefficients.ram[ram] || 0;
    const batteryAdjustment = coefficients.battery[battery] || 0;

    // Tính giá mua
    const purchasePrice = basePrice + conditionAdjustment  + ramAdjustment + batteryAdjustment;

    // Hiển thị giá mua vào ô nhập liệu
    document.getElementById('purchasePrice').value = purchasePrice.toFixed(0);

    // Tính giá bán:
    const salePrice = purchasePrice * 2.67;

    // Hiển thị giá bán:
    document.getElementById('salePrice').value = salePrice.toFixed(0);
}

// Gọi hàm để tính giá mua (ví dụ)
calculatePrice();
