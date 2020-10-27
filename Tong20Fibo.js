let soHangThu=1
let P=0
let S=1
let N=0
let tong=0
while (soHangThu<=20){
P=S
S=N
document.write("Số hạng thứ "+soHangThu+" là:"+ N +"<br>")
tong=tong+N
N=Number(S+P) 
soHangThu++
}
document.write(tong)