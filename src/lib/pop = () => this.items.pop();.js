pop = () => this.items.pop();
peek = () => this.items[this.items.length - 1];
count = () => this.items.length;
isEmpty = () => this.items.length === 0;
clear = () => (this.items = []);
print = () => {
  console.log(this.items.reverse.toString());
};
