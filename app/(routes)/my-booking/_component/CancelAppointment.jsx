import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
function CancelAppointment({ cancelClick }) {
    const {t} = useTranslation()
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="flex sm:w-auto sm:mt-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-xl px-5 cursor-pointer"
                    >
                        ✕ {t('cancel')}
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t('areYouSure')}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t('actionCannotBeUnDone')}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel  >{t('Cancel')}</AlertDialogCancel>
                        <AlertDialogAction onClick={() => cancelClick()}>{t('Continue')}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default CancelAppointment