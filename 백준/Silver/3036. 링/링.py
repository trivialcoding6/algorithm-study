import sys
import math

N = int(sys.stdin.readline().strip())
radii = list(map(int, sys.stdin.readline().split()))
    
first_ring = radii[0]
    
for i in range(1, N):
    other_ring = radii[i]
    gcd_value = math.gcd(first_ring, other_ring)
        

    print(f"{first_ring // gcd_value}/{other_ring // gcd_value}")