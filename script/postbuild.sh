page_names=("info" "pages")

for i in ${page_names[@]}
do 
	echo ${i}
	cp build/index.html build/${i}.html
done