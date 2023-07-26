<div id="cancellation-modal" class="c-modal">
    <div class="c-modal-content c-cancel-modal">
        <h2 class="c-modal-title" id="titleModal"></h2>
        <p class="c-modal-content-txt">Are you sure you want to cancel this invoice? Once canceled, the invoice
            will not be processed any further.</p>
        <div style="text-align: center; margin-top: 10px;">
            <textarea class="c-inputText" style="width: 100%; height: 80px;" placeholder="Leave a remarks.."></textarea>
            <p class="c-alert-text" style="text-align: left;">Max.50 character</p>
        </div>

        <div class="c-modal-footer" style="text-align: right; margin-top: 10px">
            <button onclick="closeModal(this)" class="c-btn-white" style="width: 100px;">CANCEL</button>
            <button onclick="onSubmit(this)" class="c-btn-gray" style="width: 130px;">CANCEL INVOICE</button>
        </div>
    </div>
</div>