
export const support = function() {
    const $texhSupport =  document.getElementById('openAi');
        $texhSupport.addEventListener('click', function() {
            $texhSupport.innerHTML = `
                <div class="bg-white border-2 w-150 h-150 border-[#680000]">
                    <div>
                        <div>
                            <input type="text" placeholder="Your Problem..." class="w-150 h-20 px-5 bg-[#1f1f1fdd] text-[#fff]"/>
                        </div>
                    </div>
                </div>
            `
        })
}