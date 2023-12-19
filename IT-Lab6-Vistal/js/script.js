class SlotMachine {
  constructor(initialAmount) {
    if (initialAmount < 0) {
      throw new Error('Initial amount cannot be negative.');
    }
    this.amount = initialAmount;
  }

  getTotalAmount() {
    return this.amount;
  }

  takeMoney(amount) {
    if (amount < 0 || amount > this.amount) {
      throw new Error('Invalid amount.');
    }
    this.amount -= amount;
  }

  addMoney(amount) {
    if (amount < 0) {
      throw new Error('Invalid amount.');
    }
    this.amount += amount;
  }
  changeMoney(amount){
    if (amount < 0) {
      throw new Error('Invalid amount.');
    }
    this.amount=amount;      
  }
}

class Casino {
  constructor(numSlotMachines, initialMoney) {
    if (numSlotMachines <= 0 || initialMoney < 0) {
      throw new Error('Invalid input.');
    }
    this.slotMachines = [];
    const initialAmountPerMachine = initialMoney / numSlotMachines;

    for (let i = 0; i < numSlotMachines; i++) {
      this.slotMachines.push(new SlotMachine(initialAmountPerMachine));
    }
  }

  getTotalMoney() {
    return this.slotMachines.reduce((total, machine) => total + machine.getTotalAmount(), 0);
  }

  getTotalMachines() {
    return this.slotMachines.length;
  }

  addMachine() {
    const newMachine = new SlotMachine(0);
    this.slotMachines.push(newMachine);
    const additionalAmount = 0;

    if (additionalAmount > 0) {
      const amountPerMachine = additionalAmount / this.slotMachines.length;
      this.slotMachines.forEach((machine) => machine.addMoney(amountPerMachine));
    }
  }

  removeMachine(uniqueNumber) {
    if (uniqueNumber < 0 || uniqueNumber >= this.slotMachines.length) {
      throw new Error('Invalid machine number.');
    }

    const removedMachine = this.slotMachines.splice(uniqueNumber, 1)[0];
    const amountToDistribute = removedMachine.getTotalAmount();
    const numMachinesLeft = this.slotMachines.length;

    if (numMachinesLeft > 0 && amountToDistribute > 0) {
      const amountPerMachine = amountToDistribute / numMachinesLeft;
      this.slotMachines.forEach((machine) => machine.addMoney(amountPerMachine));
    }
  }
}

try {
  const casino = new Casino(3, 300);
  console.log('Total money in casino:', casino.getTotalMoney());
  console.log('Total number of machines:', casino.getTotalMachines());

  casino.addMachine();
  console.log('Total number of machines after adding:', casino.getTotalMachines());
  let machineAmount = casino.slotMachines[0].getTotalAmount();
  console.log('Amount in machine 0:', machineAmount);
  casino.removeMachine(2);
  console.log('Total number of machines after removal:', casino.getTotalMachines());
  console.log('Total money in casino after removal:', casino.getTotalMoney());
  machineAmount = casino.slotMachines[0].getTotalAmount();
  console.log('Amount in machine 0:', machineAmount);
} catch (error) {
  console.error('Error:', error.message);
}
