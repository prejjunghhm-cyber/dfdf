const semesterData = [
    {
        week: "3주차",
        title: "해시테이블: 급식실 출력 확인 코드",
        role: "해시테이블 (Hash Table)",
        tasks: [
            "급식실 출력 확인 코드 구현"
        ],
        reflection: "여러 해시 방법을 직접 선택해 학생 정보를 등록하고 조회하는 과정을 구현하면서, 같은 기능도 자료구조에 따라 처리 방식이 달라질 수 있다는 점을 알게 되었다.",
        code: `def solution():
  a = HashInAll()
  print("사용 가능한 해시 방법: FoldingHashTable, ChainingHashTable...")
  ht = a.hashtypechosen(input("사용할 해시 방법: "))
  
  if ht is None: return
  
  n = int(input("초기 등록할 학생 수: "))
  for _ in range(n):
    student_id = int(input("학번 입력: "))
    name = input("이름 입력: ")
    ht.insert(student_id, name)
    
  # ... (생략) 출석/조회/삭제 시스템 ...`
    },
    {
        week: "4주차",
        title: "문자열탐색: 브루트포스 알고리즘",
        role: "문자열탐색 (String Matching)",
        tasks: [
            "브루트포스 알고리즘 구현"
        ],
        reflection: "문자열의 각 위치에서 패턴을 하나씩 비교하면서, 가장 기본적인 문자열 탐색 방식의 동작 원리를 이해할 수 있었다.",
        code: `def brute_force(text, pattern):
    n = len(text)
    m = len(pattern)
    found = False

    for i in range(n - m + 1):
        j = 0
        while j < m and text[i + j] == pattern[j]:
            j += 1
        if j == m:
            print(f"패턴이 인덱스{i}에서 발견되었습니다.")
            found = True

    if not found:
        print("패턴이 본문에 존재하지 않습니다.")

text = "ADFDFDFSDF"
pattern = "DFD"`
    },
    {
        week: "5주차",
        title: "알고리즘 설계 및 분석: 계단오르기 구현",
        role: "알고리즘 설계 및 분석",
        tasks: [
            "계단오르기 구현"
        ],
        reflection: "알고리즘 설계 및 분석 과정을 통해 계단오르기 문제를 해결하며 문제 접근 방식에 대한 이해도를 높였습니다.",
        code: `n = int(input())

if n == 0 or n == 1:
    print(1)
else:
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    print(dp[n])`
    },
    {
        week: "6주차",
        title: "탐욕알고리즘: K개 제거 후 최댓값 구하기",
        role: "탐욕알고리즘 (Greedy Algorithm)",
        tasks: [
            "K개 제거 후 최댓값 구하기"
        ],
        reflection: "스택을 활용해 작은 숫자를 바로 제거하면서, 매 순간 가장 좋은 선택을 하는 그리디 알고리즘의 원리를 이해할 수 있었다.",
        code: `def biggest_number(number, k):
    stack = []
    for digit in number:
        # 스택의 마지막 숫자가 현재 숫자보다 작으면 빼냄 (탐욕적 접근)
        while stack and k > 0 and stack[-1] < digit:
            stack.pop()
            k -= 1
        stack.append(digit)
        print("현재 숫자:", digit, "스택 상태:", stack)

    if k > 0:
        stack = stack[:-k]
        
    return ''.join(stack)`
    },
    {
        week: "7주차",
        title: "분할정복알고리즘: 최근접 점 쌍 구하기 문제, 수식과 괄호 삽입",
        role: "분할정복알고리즘 (Divide & Conquer)",
        tasks: [
            "최근접 점 쌍 구하기 문제",
            "수식과 괄호 삽입"
        ],
        reflection: "연산자를 기준으로 수식을 나누고 가능한 결과를 모두 구하면서, 재귀 함수가 복잡한 문제를 단계적으로 해결하는 데 유용하다는 것을 배웠다.<br><br>문제를 여러 부분으로 나누어 해결하는 분할정복 방법을 적용하면서, 모든 점을 직접 비교하지 않고도 효율적으로 답을 구할 수 있다는 점이 인상 깊었다.",
        code: `# 1. 최근접 점 쌍 구하기
import math
def distance(p1, p2):
  return math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)

def closest_pair(points):
  n = len(points)
  if n == 2: return distance(points[0], points[1])
  if n == 3:
    return min(distance(points[0], points[1]), distance(points[0], points[2]), distance(points[1], points[2]))
  # ... (생략)
  
# 2. 수식과 괄호 삽입
def divide_and_conquer(expression):
    if expression.isdigit():
        return [int(expression)]
    results = []
    for i in range(len(expression)):
        if expression[i] in '+-*':
            op = expression[i]
            left_results = divide_and_conquer(expression[:i])
            right_results = divide_and_conquer(expression[i + 1:])
            for left in left_results:
                for right in right_results:
                    results.append(calculate(left, right, op))
    return results`
    },
    {
        week: "8주차",
        title: "동적 계획법: 최장공통부분수열",
        role: "동적 계획법 (Dynamic Programming)",
        tasks: [
            "최장공통부분수열"
        ],
        reflection: "두 문자열을 표로 비교하고 최장 공통 부분 수열을 직접 추적하면서, 동적 계획법으로 결과뿐 아니라 실제 수열도 찾을 수 있다는 점이 흥미로웠다.",
        code: `str1 = input()
str2 = input()
n, m = len(str1), len(str2)
dp = [[0] * (m + 1) for _ in range(n + 1)]

for i in range(1, n + 1):
    for j in range(1, m + 1):
        if str1[i - 1] == str2[j - 1]:
            dp[i][j] = dp[i - 1][j - 1] + 1
        else:
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

# 역추적 (LCS 추출)
i, j = n, m
lcs = ""
while i > 0 and j > 0:
    if str1[i - 1] == str2[j - 1]:
        lcs = str1[i - 1] + lcs
        i -= 1; j -= 1
    else:
        if dp[i - 1][j] >= dp[i][j - 1]: i -= 1
        else: j -= 1`
    },
    {
        week: "9주차",
        title: "백트래킹: 숫자 골라 최대합 구하기",
        role: "백트래킹 (Backtracking)",
        tasks: [
            "숫자 골라 최대합 구하기"
        ],
        reflection: "서로 인접하지 않는 숫자만 선택하는 조건을 확인하며 백트래킹을 구현해 보니, 선택한 경우와 선택하지 않은 경우를 모두 탐색하는 과정이 중요하다는 것을 느꼈다.",
        code: `def backtracking(index, count, total):
    nonlocal answer

    if count == k:
        answer = max(answer, total)
        return
    if index == n * m:
        return
    if count + (n * m - index) < k:
        return

    x = index // m
    y = index % m

    if can_pick(x, y):
        visited[x][y] = True
        backtracking(index + 1, count + 1, total + board[x][y])
        visited[x][y] = False

    backtracking(index + 1, count, total)`
    }
];

function renderTimeline() {
    const container = document.getElementById('timeline');
    
    semesterData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        
        const tasksHTML = item.tasks.map(task => `<li class="task-item">• ${task}</li>`).join('');
        
        div.innerHTML = `
            <div class="glass-card">
                <div style="font-weight: 700; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 1px;">${item.week}</div>
                <h3 class="week-title">${item.title}</h3>
                
                <div class="card-section">
                    <div class="section-label">역할 및 작업 (Role & Tasks)</div>
                    <div style="font-weight: 500; margin-bottom: 0.5rem; color: #e2e8f0;">${item.role}</div>
                    <ul class="task-list">
                        ${tasksHTML}
                    </ul>
                </div>

                <div class="card-section" style="margin-top: 1.5rem;">
                    <div class="section-label">느낀점 (Reflection)</div>
                    <p class="reflection-text">${item.reflection}</p>
                </div>
                
                <button class="code-button" data-index="${index}">코드 보기 (View Code) 💻</button>
            </div>
        `;
        
        container.appendChild(div);
    });
}

function initModal() {
    const modal = document.getElementById('codeModal');
    const closeBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCode = document.getElementById('modalCode');
    
    // Add click listeners to all code buttons
    document.querySelectorAll('.code-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            const data = semesterData[index];
            
            modalTitle.textContent = `${data.week} - ${data.title}`;
            modalCode.textContent = data.code;
            
            // Re-highlight the code using Prism
            if (window.Prism) {
                Prism.highlightElement(modalCode);
            }
            
            modal.classList.add('active');
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function initObserver() {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    });

    items.forEach(item => {
        observer.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    initModal();
    initObserver();
});
