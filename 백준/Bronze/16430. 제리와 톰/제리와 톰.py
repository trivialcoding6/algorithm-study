import sys
import math

A, B = map(int, sys.stdin.readline().split())
    
P = B - A
Q = B
    
gcd_value = math.gcd(P, Q)
    
print(P // gcd_value, Q // gcd_value)