function skillsMember() {
    return {

            restrict: 'E',
            templateUrl: 'modules/skills/views/member.html',
            controller: 'vm',
            bindToController: true,
            scope: {
                member: '-'
            }
    };
}